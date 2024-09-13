struct Parser {
  tokens : Array[@types.Token]
  mut current : Int
  mut log : @util.IndentLogger?

  // use global error array rather than pass errors as return value level by level
  // 或许能更快
  mut errors : Array[@types.MBError]
}

fn Parser::new(
  tokens : Array[@types.Token],
  ~log : @util.IndentLogger? = None
) -> Parser {
  { tokens, current: 0, log, errors: [] }
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
  } else {
    self.tokens[self.current]
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

// type_annotation: COLON type;
// 
// type:
// 'Unit'
// | 'Bool'
// | 'Int'
// | 'Double'
// | array_type
// | tuple_type
// | function_type;
// array_type: 'Array' '[' type ']';
// tuple_type: '(' type (',' type)* ')'; // (Int, Bool)
// function_type:
// '(' type (',' type)* ')' '->' type; // (Int, Bool) -> Int
fn Parser::type_annotation(self : Parser) -> @types.Type {
  if self.match_token(@types.Token::INT) {
    @types.Type::Int
  } else if self.match_token(@types.Token::UNIT) {
    @types.Type::Unit
  } else if self.match_token(@types.Token::DOUBLE) {
    @types.Type::Double
  } else if self.match_token(@types.Token::BOOL) {
    @types.Type::Bool
  } else if self.match_token(@types.Token::ARRAY) {
    let _ = self.consume_or_error(@types.Token::LBRACKET)
    let ty = self.type_annotation()
    let _ = self.consume_or_error(@types.Token::RBRACKET)
    @types.Type::Array(ty)
  } else if self.match_token(@types.Token::LPAREN) {
    if self.match_token(@types.Token::RPAREN) {
      return @types.Type::Unit
    }
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
    self.error("Expected type mark but got \{self.peek()}")
    // 这样好吗？还是返回个 option 更好
    @types.Type::Unit
  }
}

// statements
// ----------------------------
fn Parser::syntax(self : Parser) -> @types.Syntax {
  panic()
}

fn Parser::top_level(self : Parser) -> @types.Syntax {
  panic()
}

fn Parser::stmt(self : Parser) -> @types.Syntax {
  panic()
}

//

fn Parser::letrec_stmt(self : Parser) -> @types.Syntax {
  fn match_fun_def() -> @types.Fundef {
    let _ = self.consume_or_error(@types.Token::FN)
    let fun_ident = self.consume_ident_or_error()
    let params = self.params_list()
    self.consume_or_error(@types.Token::ARROW)
    let ret_ty = self.type_annotation()
    let fun_ty = @types.Type::Fun(params.map(fn(x) { x.1 }), ret_ty)
    let body = self.block()
    { name: (fun_ident, fun_ty), args: params, body }
  }

  let fun = match_fun_def()
  let next = self.stmt()
  @types.Syntax::LetRec(fun, next)
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

fn Parser::block(self : Parser) -> @types.Syntax {
  let _ = self.consume_or_error(@types.Token::LCURLYBRACKET)
  let stmt = self.stmt()
  let _ = self.consume_or_error(@types.Token::RCURLYBRACKET)
  stmt
}

fn Parser::if_stmt(self : Parser) -> @types.Syntax {
  let _ = self.consume_or_error(@types.Token::IF)
  let condition = self.expr()
  panic()
}

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
    all = @types.Syntax::Eq(all, right)
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
    self.value_expr()
  }
}

fn Parser::value_expr(self : Parser) -> @types.Syntax {
  let now = self.peek()
  match now {
    @types.Token::LPAREN => {
      let _ = self.advance()
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
      self.consume_or_error(@types.Token::COLON)
      self.consume_or_error(@types.Token::COLON)
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
    k => {
      println("Unexpected token: \{k}")
      panic()
    }
  }
}

fn Parser::consume_or_error(self : Parser, token : @types.Token) -> Unit {
  if self.peek() == token {
    let _ = self.advance()

  } else {
    self.error("Expected token \{token} but got \{self.peek()}")
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

fn Parser::error(
  self : Parser,
  ~syntax : @types.Syntax? = None,
  message : String
) -> Unit {
  if self.log.is_empty() {
    self.log = Some(@util.IndentLogger::new())
  } else {
    self.log.unwrap().write_string("Parser error at token \{self.peek()}:\n")
    self.log.unwrap().indent()
    self.log.unwrap().write_string("message: \{message}\n")
    if syntax.is_empty() {
      self.log.unwrap().write_string("syntax: not provided\n")
    } else {
      self.log.unwrap().write_string("syntax: \{syntax}\n")
    }
    self.log.unwrap().outdent()
  }
}

fn Parser::finish(self : Parser) -> @types.Syntax {
  self.expr()
}

test "parser" {
  let tokens = [
    @types.Token::INT_LITERAL(1),
    @types.Token::ADD,
    @types.Token::INT_LITERAL(2),
    @types.Token::MUL,
    @types.Token::DOUBLE_LITERAL(3.14),
    @types.Token::SUB,
    @types.Token::INT_LITERAL(4),
  ]
  let parser = Parser::new(tokens)
  let syntax = parser.finish()
  syntax.to_graphviz().render("a.dot")
  assert_eq!(syntax.to_sexpr(), "(subi (addi 1 (muli 2 3.14)) 4)")
}

test "parser 2" {
  let tokens = [
    @types.Token::TRUE,
    @types.Token::EQ,
    @types.Token::INT_LITERAL(2),
    @types.Token::GT,
    @types.Token::INT_LITERAL(1),
  ]
  let parser = Parser::new(tokens)
  let syntax = parser.finish()
  println(syntax.to_sexpr())
  assert_eq!(syntax.to_sexpr(), "(= #t (not (<= 2 1)))")
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

test "params_list" {
  let tokens = [
    @types.Token::LPAREN,
    @types.Token::IDENTIFIER("a"),
    @types.Token::COLON,
    @types.Token::INT,
    @types.Token::COMMA,
    @types.Token::IDENTIFIER("b"),
    @types.Token::COLON,
    @types.Token::DOUBLE,
    @types.Token::RPAREN,
  ]
  let parser = Parser::new(tokens)
  let params = parser.params_list()
  println(parser.errors)
  assert_eq!(params, [("a", @types.Type::Int), ("b", @types.Type::Double)])
}

test "type mark Unit" {
  let tokens = [@types.Token::LPAREN, @types.Token::RPAREN]
  let parser = Parser::new(tokens)
  let ty = parser.type_annotation()
  println(parser.errors)
  assert_eq!(ty, @types.Type::Unit)
}

test "type mark Tuple" {
  let tokens = [
    @types.Token::LPAREN,
    @types.Token::INT,
    @types.Token::COMMA,
    @types.Token::BOOL,
    @types.Token::RPAREN,
  ]
  let parser = Parser::new(tokens)
  let ty = parser.type_annotation()
  println(parser.errors)
  assert_eq!(ty, @types.Type::Tuple([@types.Type::Int, @types.Type::Bool]))
}

test "type mark Function" {
  let tokens = [
    @types.Token::LPAREN,
    @types.Token::INT,
    @types.Token::COMMA,
    @types.Token::BOOL,
    @types.Token::RPAREN,
    @types.Token::ARROW,
    @types.Token::DOUBLE,
  ]
  let parser = Parser::new(tokens)
  let ty = parser.type_annotation()
  println(parser.errors)
  assert_eq!(
    ty,
    @types.Type::Fun([@types.Type::Int, @types.Type::Bool], @types.Type::Double),
  )
}

test "type mark Function in Tuple" {
  // ((Int) -> Double, (Bool) -> Int))
  let tokens = [
    @types.Token::LPAREN,
    @types.Token::LPAREN,
    @types.Token::INT,
    @types.Token::RPAREN,
    @types.Token::ARROW,
    @types.Token::DOUBLE,
    @types.Token::COMMA,
    @types.Token::LPAREN,
    @types.Token::BOOL,
    @types.Token::RPAREN,
    @types.Token::ARROW,
    @types.Token::INT,
    @types.Token::RPAREN,
    @types.Token::RPAREN,
  ]
  let parser = Parser::new(tokens)
  let ty = parser.type_annotation()
  println(parser.errors)
  assert_eq!(
    ty,
    @types.Type::Tuple(
      [
        @types.Type::Fun([@types.Type::Int], @types.Type::Double),
        @types.Type::Fun([@types.Type::Bool], @types.Type::Int),
      ],
    ),
  )
}
