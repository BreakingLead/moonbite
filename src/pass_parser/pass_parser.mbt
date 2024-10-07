type! ParsingError String

struct Parser {
  tokens : Array[@types.Token]
  mut current : Int
  mut logger : @util.IndentLogger?

  // use global error array rather than pass errors as return value level by level
  // 或许能更快
  mut errors : Array[@types.MBError]
}

fn Parser::new(
  tokens : Array[@types.Token],
  ~log : @util.IndentLogger? = None
) -> Parser {
  { tokens, current: 0, logger: log, errors: [] }
}

// ----------------------------
// auxilaries
// ----------------------------

fn Parser::is_at_end(self : Parser) -> Bool {
  self.current >= self.tokens.length()
}

fn Parser::peek(self : Parser, ~distance : Int = 0) -> @types.Token {
  if self.is_at_end() {
    @types.Token::EOF
  } else if self.current + distance >= self.tokens.length() {
    @types.Token::EOF
  } else {
    self.tokens[self.current + distance]
  }
}

fn Parser::check(self : Parser, token : @types.Token) -> Bool {
  if self.is_at_end() {
    false
  } else {
    self.peek() == token
  }
}

fn Parser::advance(self : Parser) -> @types.Token {
  if not(self.is_at_end()) {
    self.current += 1
  }
  self.tokens[self.current - 1]
}

fn Parser::consume_or_error(self : Parser, token : @types.Token) -> Unit {
  if self.peek() == token {
    let _ = self.advance()

  } else {
    // self.error("Expected token \{token} but got \{self.peek()}")
    self.error("需要 \{token} ，但却遇到 \{self.peek()}")
  }
}

fn Parser::consume_ident_or_error(self : Parser) -> String {
  let now = self.peek()
  match now {
    @types.Token::IDENTIFIER(name) => {
      let _ = self.advance()
      name
    }
    _ => {
      self.error("Expected identifier but got \{now}")
      ""
    }
  }
}

// If the current token is the expected one,
// consume it and return true. Otherwise, return false.
fn Parser::match_token(self : Parser, token : @types.Token) -> Bool {
  if self.check(token) {
    let _ = self.advance()
    true
  } else {
    false
  }
}

// ----------------------------
// types
// ----------------------------
fn Parser::type_annotation(self : Parser) -> @types.Type {
  if self.match_token(@types.Token::INT) {
    // Int
    @types.Type::Int
  } else if self.match_token(@types.Token::UNIT) {
    // Unit
    @types.Type::Unit
  } else if self.match_token(@types.Token::DOUBLE) {
    // Double
    @types.Type::Double
  } else if self.match_token(@types.Token::BOOL) {
    // Bool
    @types.Type::Bool
  } else if self.match_token(@types.Token::ARRAY) {
    self.consume_or_error(@types.Token::DOUBLE_COLON)
    // Array
    let _ = self.consume_or_error(@types.Token::LBRACKET)
    let ty = self.type_annotation()
    let _ = self.consume_or_error(@types.Token::RBRACKET)
    @types.Type::Array(ty)
  } else if self.match_token(@types.Token::LPAREN) {
    if self.match_token(@types.Token::RPAREN) {
      // () is unit
      return @types.Type::Unit
    }

    // Tuple
    let first = self.type_annotation()
    let all = [first]
    while self.match_token(@types.Token::COMMA) {
      let right = self.type_annotation()
      all.push(right)
    }
    self.consume_or_error(@types.Token::RPAREN)
    // function (_, _, _) -> _
    if self.match_token(@types.Token::ARROW) {
      let res = self.type_annotation()
      @types.Type::Fun(all, res)
    } else {
      @types.Type::Tuple(all)
    }
  } else {
    // self.error("Expected type mark but got \{self.peek()}")
    self.error("需要类型标注，但却遇到 \{self.peek()}")
    // 这样好吗？还是返回个 option 更好

    @types.Type::Unit
  }
}

// ----------------------------
// statements
// ----------------------------

fn Parser::stmt(self : Parser) -> @types.Syntax {
  match self.peek() {
    @types.Token::LET => {
      let _ = self.advance()
      if self.peek() == @types.Token::LPAREN {
        // let (a, b, c) : (T, U, V) = expr
        let _ = self.advance()
        let names = [self.consume_ident_or_error()]
        while self.peek() != @types.Token::RPAREN {
          let _ = self.consume_or_error(@types.Token::COMMA)
          let name = self.consume_ident_or_error()
          names.push(name)
        }
        let _ = self.consume_or_error(@types.Token::RPAREN)
        let _ = self.consume_or_error(@types.Token::COLON)
        let _ = self.consume_or_error(@types.Token::LPAREN)
        let types = [self.type_annotation()]
        while self.peek() != @types.Token::RPAREN {
          let _ = self.consume_or_error(@types.Token::COMMA)
          let ty = self.type_annotation()
          types.push(ty)
        }
        let _ = self.consume_or_error(@types.Token::RPAREN)
        self.consume_or_error(@types.Token::ASSIGN)
        let value = self.expr()
        let zipped = names.mapi(fn(n, name) { (name, types[n]) })
        let next = self.stmt()
        @types.Syntax::LetTuple(zipped, value, next)
      } else {
        // let name : ty = expr; next
        let name = self.consume_ident_or_error()
        self.consume_or_error(@types.Token::COLON)
        let ty = self.type_annotation()
        self.consume_or_error(@types.Token::ASSIGN)
        let value = self.expr()
        let next = self.stmt()
        @types.Syntax::Let((name, ty), value, next)
      }
    }
    @types.Token::FN => {
      let fun = self.nontop_fn_decl()
      let next = self.stmt()
      @types.Syntax::LetRec(fun, next)
    }
    // x[y] = z
    @types.Token::IDENTIFIER(name) => {
      let _ = self.advance()
      self.consume_or_error(@types.Token::LBRACKET)
      let index = self.expr()
      self.consume_or_error(@types.Token::RBRACKET)
      self.consume_or_error(@types.Token::ASSIGN)
      let value = self.expr()
      let _ = self.consume_or_error(@types.Token::SEMICOLON)
      let next = self.stmt()
      @types.Syntax::Put(@types.Syntax::Var(name), index, value, next)
    }
    _ => {
      let expr = self.expr()
      expr
    }
  }
}

fn Parser::top_level(self : Parser) -> @types.Syntax {
  if self.is_at_end() {
    return @types.Syntax::Unit
  }
  // 'let' ident ':' type_annotation '=' expr ';'
  let top_level_let = fn() -> @types.Syntax {
    let _ = self.consume_or_error(@types.Token::LET)
    let name = self.consume_ident_or_error()
    self.consume_or_error(@types.Token::COLON)
    let ty = self.type_annotation()
    self.consume_or_error(@types.Token::ASSIGN)
    let value = self.expr()
    let _ = self.consume_or_error(@types.Token::SEMICOLON)
    let next = self.top_level()
    @types.Syntax::Let((name, ty), value, next)
  }
  match self.peek() {
    @types.Token::LET => top_level_let()
    @types.Token::FN => {
      let fun = if self.peek(distance=1) == @types.Token::IDENTIFIER("main") {
        self.top_fn_decl(should_match_main=true)
      } else {
        self.top_fn_decl()
      }
      let next = self.top_level()
      @types.Syntax::LetRec(fun, next)
    }
    _ => {
      self.error("Unexpected token \{self.peek()}")
      @types.Syntax::Unit
    }
  }
}

// non-top function definition:
// 'fn' ident '(' nontop_params ')' ('->' type_annotation)? block_expr
//
// nontop_params: nontop_param (',' nontop_param)*
// nontop_param: ident (':' type_annotation)?
//
// 注意，如果省略类型，这里不会做推断，而是直接返回 unit

fn Parser::nontop_fn_decl(self : Parser) -> @types.Fundef {
  let nontop_param = fn() -> (String, @types.Type) {
    let name = self.consume_ident_or_error()
    if self.check(@types.Token::COLON) {
      let _ = self.advance()
      let ty = self.type_annotation()
      (name, ty)
    } else {
      //! TODO
      (name, @types.Type::Unit)
    }
  }
  let nontop_params = fn() -> Array[(String, @types.Type)] {
    let params = [nontop_param()]
    while self.match_token(@types.Token::COMMA) {
      let param = nontop_param()
      params.push(param)
    }
    params
  }
  let _ = self.consume_or_error(@types.Token::FN)
  let fun_name = self.consume_ident_or_error()
  let _ = self.consume_or_error(@types.Token::LPAREN)
  let params = nontop_params()
  let _ = self.consume_or_error(@types.Token::RPAREN)
  let ret_ty = if self.match_token(@types.Token::ARROW) {
    self.type_annotation()
  } else {
    @types.Type::Unit
  }
  let next = self.block_expr()
  let fun_ty = @types.Type::Fun(params.map(fn(x) { x.1 }), ret_ty)
  { name: (fun_name, fun_ty), args: params, body: next }
}

fn Parser::top_fn_decl(
  self : Parser,
  ~should_match_main : Bool = false
) -> @types.Fundef {
  // main has its unique syntax
  if should_match_main {
    let _ = self.consume_or_error(@types.Token::FN)
    let s = self.consume_ident_or_error()
    if s != "main" {
      self.error("Expected main function but got \{s}")
      return {
        name: (s, @types.Type::Unit),
        args: [],
        body: @types.Syntax::Unit,
      }
    }
    let body = self.block_expr()
    let _ = self.consume_or_error(@types.Token::SEMICOLON)
    { name: (s, @types.Type::Fun([], @types.Type::Unit)), args: [], body }
  } else {
    let _ = self.consume_or_error(@types.Token::FN)
    let fun_ident = self.consume_ident_or_error()
    let params = self.params_list()
    self.consume_or_error(@types.Token::ARROW)
    let ret_ty = self.type_annotation()
    let fun_ty = @types.Type::Fun(params.map(fn(x) { x.1 }), ret_ty)
    let body = self.block_expr()
    let _ = self.consume_or_error(@types.Token::SEMICOLON)
    { name: (fun_ident, fun_ty), args: params, body }
  }
}

/// e.g.
/// `name : ty`
/// `a: Int`
fn Parser::typemarked_var(self : Parser) -> (String, @types.Type) {
  let name = self.consume_ident_or_error()
  self.consume_or_error(@types.Token::COLON)
  let ty = self.type_annotation()
  (name, ty)
}

// (_:_, _:_, _:_, ..)
fn Parser::params_list(self : Parser) -> Array[(String, @types.Type)] {
  let _ = self.consume_or_error(@types.Token::LPAREN)
  if self.check(@types.Token::RPAREN) {
    let _ = self.advance()
    return []
  }
  let fst = self.typemarked_var()
  let params = [fst]
  while self.check(@types.Token::COMMA) {
    let _ = self.advance()
    let param = self.typemarked_var()
    params.push(param)
  }
  let _ = self.consume_or_error(@types.Token::RPAREN)
  params
}

fn Parser::if_stmt(self : Parser) -> @types.Syntax {
  let _ = self.consume_or_error(@types.Token::IF)
  let condition = self.expr()
  panic()
}

// ----------------------------
// expressions
// ----------------------------
fn Parser::expr(self : Parser) -> @types.Syntax {
  self.equality_level_expr()
}

fn Parser::equality_level_expr(self : Parser) -> @types.Syntax {
  let mut all = self.comparison_level_expr()
  while self.check(@types.Token::EQ) {
    let _ = self.advance()
    let right = self.expr()
    all = @types.Syntax::EQ(all, right)
  }
  all
}

fn Parser::comparison_level_expr(self : Parser) -> @types.Syntax {
  let mut all = self.add_sub_level_expr()
  let now = self.peek()
  while self.check(@types.Token::GE) ||
        self.check(@types.Token::LE) ||
        self.check(@types.Token::GT) ||
        self.check(@types.Token::LT) {
    let _ = self.advance()
    let right = self.add_sub_level_expr()
    match now {
      // WARN this could be buggy? i'm not very sure
      @types.Token::LE => all = @types.Syntax::LE(all, right)
      @types.Token::GT =>
        all = @types.Syntax::Not(@types.Syntax::LE(all, right))
      @types.Token::GE => all = @types.Syntax::LE(right, all)
      @types.Token::LT =>
        all = @types.Syntax::Not(@types.Syntax::LE(right, all))
      _ => panic()
    }
  }
  all
}

// term           → factor ( ( "-" | "+" ) factor )* ;
fn Parser::add_sub_level_expr(self : Parser) -> @types.Syntax {
  let mut all = self.mul_div_level_expr()
  while self.check(@types.Token::ADD) || self.check(@types.Token::SUB) {
    let now = self.peek()
    let _ = self.advance()
    let right = self.mul_div_level_expr()
    match now {
      @types.Token::ADD =>
        all = @types.Syntax::Prim(all, right, @types.Op::Add, kind=None)
      @types.Token::SUB =>
        all = @types.Syntax::Prim(all, right, @types.Op::Sub, kind=None)
      _ => panic()
    }
  }
  all
}

// factor         → unary ( ( "/" | "*" ) unary )* ;
fn Parser::mul_div_level_expr(self : Parser) -> @types.Syntax {
  let mut all = self.unary()
  while self.check(@types.Token::DIV) || self.check(@types.Token::MUL) {
    let now = self.advance()
    let right = self.unary()
    match now {
      @types.Token::DIV =>
        all = @types.Syntax::Prim(all, right, @types.Op::Div, kind=None)
      @types.Token::MUL =>
        all = @types.Syntax::Prim(all, right, @types.Op::Mul, kind=None)
      _ => panic()
    }
  }
  all
}

fn Parser::unary(self : Parser) -> @types.Syntax {
  if self.match_token(@types.Token::SUB) {
    let right = self.unary()
    @types.Syntax::Neg(right, kind=None)
  } else if self.check(@types.Token::NOT) {
    let _ = self.consume_or_error(@types.Token::LPAREN)
    let expr = self.expr()
    let _ = self.consume_or_error(@types.Token::RPAREN)
    @types.Syntax::Not(expr)
  } else {
    self.if_level_expr()
  }
}

fn Parser::if_level_expr(self : Parser) -> @types.Syntax {
  match self.peek() {
    @types.Token::IF => {
      let _ = self.advance()
      let condition = self.expr()
      let then_branch = self.block_expr()
      if self.match_token(@types.Token::ELSE) {
        let else_branch = self.block_expr()
        @types.Syntax::If(condition, then_branch, else_branch)
      } else {
        @types.Syntax::If(condition, then_branch, @types.Syntax::Unit)
      }
    }
    _ => self.get_or_apply_level_expr()
  }
}

// get_or_apply_level_expr:
// value_expr
// | get_or_apply_level_expr '[' expr ']'
// | get_or_apply_level_expr '(' (expr (',' expr)*)? ')'
fn Parser::get_or_apply_level_expr(self : Parser) -> @types.Syntax {
  if self.peek(distance=1) == @types.Token::LBRACKET {
    let _ = self.advance()
    let index = self.expr()
    let _ = self.consume_or_error(@types.Token::RBRACKET)
    let mut get = @types.Syntax::Get(
      @types.Syntax::Var(self.consume_ident_or_error()),
      index,
    )
    while self.match_token(@types.Token::LBRACKET) {
      let _ = self.advance()
      let index = self.expr()
      let _ = self.consume_or_error(@types.Token::RBRACKET)
      get = @types.Syntax::Get(get, index)
    }
    get
  } else if self.peek(distance=1) == @types.Token::LPAREN {
    let name = self.consume_ident_or_error()
    let _ = self.consume_or_error(@types.Token::LPAREN)
    let args = if self.check(@types.Token::RPAREN) {
      []
    } else {
      let fst = self.expr()
      let args = [fst]
      while self.match_token(@types.Token::COMMA) {
        let right = self.expr()
        args.push(right)
      }
      args
    }
    let _ = self.consume_or_error(@types.Token::RPAREN)
    @types.Syntax::App(@types.Syntax::Var(name), args)
  } else {
    self.value_expr()
  }
}

// belongs to value_expr
fn tuple_expr(self : Parser) -> @types.Syntax {
  let _ = self.consume_or_error(@types.Token::LPAREN)
  if self.match_token(@types.Token::RPAREN) {
    return @types.Syntax::Unit
  } else {
    let fst = self.expr()
    let all = [fst]
    while self.match_token(@types.Token::COMMA) {
      let right = self.expr()
      all.push(right)
    }
    self.consume_or_error(@types.Token::RPAREN)
    @types.Syntax::Tuple(all)
  }
}

fn Parser::block_expr(self : Parser) -> @types.Syntax {
  let _ = self.consume_or_error(@types.Token::LCURLYBRACKET)
  let stmts = self.stmt()
  let _ = self.consume_or_error(@types.Token::RCURLYBRACKET)
  stmts
}

fn Parser::value_expr(self : Parser) -> @types.Syntax {
  let now = self.peek()
  match now {
    @types.Token::LPAREN => self.tuple_expr()
    @types.Token::FALSE => {
      let _ = self.advance()
      @types.Syntax::Bool(false)
    }
    @types.Token::TRUE => {
      let _ = self.advance()
      @types.Syntax::Bool(true)
    }
    @types.Token::INT_LITERAL(value) => {
      let _ = self.advance()
      @types.Syntax::Int(value)
    }
    @types.Token::DOUBLE_LITERAL(value) => {
      let _ = self.advance()
      @types.Syntax::Double(value)
    }
    // Array::make(_, _)
    @types.Token::ARRAY => {
      self.consume_or_error(@types.Token::DOUBLE_COLON)
      if self.consume_ident_or_error() == "make" {
        let _ = self.consume_or_error(@types.Token::LPAREN)
        let size = self.expr()
        let _ = self.consume_or_error(@types.Token::COMMA)
        let init = self.expr()
        let _ = self.consume_or_error(@types.Token::RPAREN)
        @types.Syntax::Array(size, init)
      } else {
        @types.Syntax::Unit
      }
    }
    @types.Token::IDENTIFIER(name) => {
      let _ = self.advance()
      @types.Syntax::Var(name)
    }
    @types.Token::LCURLYBRACKET => self.block_expr()
    k => {
      self.error("Unexpected token: \{k} in parsing value_expr")
      @types.Syntax::Unit
    }
  }
  // Block expr
}

fn Parser::error(
  self : Parser,
  ~syntax : @types.Syntax? = None,
  message : String
) -> Unit {
  if self.logger.is_empty() {
    self.logger = Some(@util.IndentLogger::new())
  }
  self.logger
  .unwrap()
  .write_string(
    "解析错误：当前 token 为 \{self.peek()} (第 \{self.current} 个):\n",
  )
  self.logger.unwrap().indent()
  self.logger.unwrap().write_string("信息: \{message}\n")
  if not(syntax.is_empty()) {
    self.logger.unwrap().write_string("syntax: \{syntax}\n")
  }
  self.logger.unwrap().write_string("\n")
  self.logger.unwrap().outdent()
}

pub fn Parser::print_errors(self : Parser) -> Unit {
  if not(self.errors.is_empty()) {
    println(self.logger.unwrap().to_string())
  } else {
    println("No parsing errors found.")
  }
}

fn Parser::finish(self : Parser) -> @types.Syntax {
  self.expr()
}

pub fn pass_parser(ctx : @types.Ctx) -> @types.Ctx {
  let parser = Parser::new(ctx.tokens.unwrap(), log=Some(ctx.logger))
  if not(parser.errors.is_empty()) {
    let mut x = ctx.errors
    for e in parser.errors {
      x = x.push(e)
    }
    let syntax = parser.finish()
    { ..ctx, ast_tree: None, errors: x }
  } else {
    let syntax = parser.finish()
    { ..ctx, ast_tree: Some(syntax) }
  }
}
