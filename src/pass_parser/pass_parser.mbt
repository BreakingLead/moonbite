pub type! ParseError String

struct Parser {
  tokens : Array[@types.Token]
  mut current : Int
  mut log : @util.IndentLogger?

  // use global error array rather than pass errors as return value level by level
  // 或许能更快
  mut errors : Array[ParseError]
}

fn Parser::new(
  tokens : Array[@types.Token],
  ~log : @util.IndentLogger? = None
) -> Parser {
  { tokens, current: 0, log, errors: [] }
}

// expression, equality and comparison:
// expr:
//  add_sub_level_expr
//  | add_sub_level_expr '==' expr
//  | add_sub_level_expr '<=' expr;

fn Parser::is_at_end(self : Parser) -> Bool {
  self.current >= self.tokens.length()
}

fn Parser::peek(self : Parser, ~distance : Int = 0) -> @types.Token {
  if self.is_at_end() {
    @types.Token::NONE
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

fn Parser::expression(self : Parser) -> @types.Syntax {
  self.equality()
}

fn Parser::equality(self : Parser) -> @types.Syntax {
  let mut all = self.comparison()
  while self.check(@types.Token::EQ) {
    let _ = self.advance()
    let right = self.expression()
    all = @types.Syntax::Eq(all, right)
  }
  all
}

fn Parser::comparison(self : Parser) -> @types.Syntax {
  let mut all = self.term()
  let now = self.peek()
  while self.check(@types.Token::GE) ||
        self.check(@types.Token::LE) ||
        self.check(@types.Token::GT) ||
        self.check(@types.Token::LT) {
    let _ = self.advance()
    let right = self.term()
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
fn Parser::term(self : Parser) -> @types.Syntax {
  let mut all = self.factor()
  while self.check(@types.Token::ADD) || self.check(@types.Token::SUB) {
    let now = self.peek()
    let _ = self.advance()
    let right = self.factor()
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
fn Parser::factor(self : Parser) -> @types.Syntax {
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
  if self.check(@types.Token::SUB) {
    let _ = self.advance()
    let right = self.unary()
    @types.Syntax::Neg(right, kind=None)
  } else {
    self.primary()
  }
}

fn Parser::primary(self : Parser) -> @types.Syntax {
  let now = self.peek()
  match now {
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
    @types.Token::IDENTIFIER(name) => {
      let _ = self.advance()
      @types.Syntax::Var(name)
    }
    @types.Token::LPAREN => {
      let _ = self.advance()
      let expr = self.expression()
      self.consume_or_error(@types.Token::RPAREN)
      expr
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

fn Parser::error(
  self : Parser,
  ~syntax : @types.Syntax? = None,
  message : String
) -> Unit {
  if not(self.log.is_empty()) {
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
  self.expression()
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
  let parser = Parser::new(ctx.tokens.unwrap(), log=Some(ctx.log))
  if not(parser.errors.is_empty()) {
    panic()
  } else {
    let syntax = parser.finish()
    { ..ctx, ast_tree: Some(syntax) }
  }
}
