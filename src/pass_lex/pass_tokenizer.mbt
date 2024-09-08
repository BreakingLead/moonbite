fn is_whitespace(c : Char) -> Bool {
  match c {
    '\n' | '\r' | '\t' | ' ' => true
    _ => false
  }
}

fn is_alphabetic(c : Char) -> Bool {
  match c {
    'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g'
    | 'h'
    | 'i'
    | 'j'
    | 'k'
    | 'l'
    | 'm'
    | 'n'
    | 'o'
    | 'p'
    | 'q'
    | 'r'
    | 's'
    | 't'
    | 'u'
    | 'v'
    | 'w'
    | 'x'
    | 'y'
    | 'z'
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' =>
      true
    _ => false
  }
}

fn is_numeric(c : Char) -> Bool {
  match c {
    '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' => true
    _ => false
  }
}

struct Scanner {
  source : String
  mut tokens : Array[@types.Token]
  mut start : Int
  mut current : Int
  mut line : Int
  mut had_error : Bool
  mut logger : @util.IndentLogger
}

fn Scanner::new(source : String, logger : @util.IndentLogger) -> Scanner {
  {
    source,
    tokens: Array::new(),
    start: 0,
    current: 0,
    line: 1,
    had_error: false,
    logger,
  }
}

fn Scanner::error(self : Scanner, message : String) -> Unit {
  self.had_error = true
  self.logger.write_string("Lexical error:\n")
  self.logger.indent()
  self.logger.write_string(
    #|Token `\{self.source.substring(start=self.start, end=self.current)}` has error:
    #|\{message}
    #|at line \{self.line} 
    ,
  )
}

fn Scanner::is_at_end(self : Scanner) -> Bool {
  self.current >= self.source.length()
}

fn Scanner::peek(self : Scanner, ~distance : Int = 0) -> Char {
  if self.is_at_end() {
    '\u0000'
  } else {
    self.source[self.current + distance]
  }
}

fn Scanner::advance(self : Scanner) -> Char {
  self.current += 1
  self.source[self.current - 1]
}

fn Scanner::match_char(self : Scanner, expected : Char) -> Bool {
  if self.is_at_end() {
    false
  } else if self.source[self.current] != expected {
    false
  } else {
    self.current += 1
    true
  }
}

fn Scanner::add(self : Scanner, token_type : @types.Token) -> Unit {
  self.tokens.push(token_type)
}

fn Scanner::add_number(self : Scanner) -> Unit {
  let mut has_dot = false
  while is_numeric(self.peek()) {
    self.current += 1
  }
  if self.peek() == '.' && is_numeric(self.peek(distance=1)) {
    has_dot = true
    self.current += 1 // consume the '.'
    while is_numeric(self.peek()) {
      self.current += 1
    }
  }
  if has_dot {
    let n = self.source.substring(start=self.start, end=self.current)
    let n = @strconv.parse_double?(n).unwrap()
    self.add(@types.Token::DOUBLE_LITERAL(n))
  } else {
    let n = self.source.substring(start=self.start, end=self.current)
    let n = @strconv.parse_int?(n).unwrap()
    self.add(@types.Token::INT_LITERAL(n))
  }
}

fn Scanner::add_identifier(self : Scanner) -> Unit {
  while is_alphabetic(self.peek()) {
    self.current += 1
  }
  let text = self.source.substring(start=self.start, end=self.current)
  match text {
    "true" => self.add(@types.Token::TRUE)
    "false" => self.add(@types.Token::FALSE)
    "if" => self.add(@types.Token::IF)
    "else" => self.add(@types.Token::ELSE)
    "fn" => self.add(@types.Token::FN)
    "let" => self.add(@types.Token::LET)
    "Unit" => self.add(@types.Token::UNIT)
    "Int" => self.add(@types.Token::INT)
    "Double" => self.add(@types.Token::DOUBLE)
    "Array" => self.add(@types.Token::ARRAY)
    _ => self.add(@types.Token::IDENTIFIER(text))
  }
}

fn Scanner::scan_token(self : Scanner) -> Unit {
  let c = self.advance()
  match c {
    '(' => self.add(@types.Token::LPAREN)
    ')' => self.add(@types.Token::RPAREN)
    '[' => self.add(@types.Token::LBRACKET)
    ']' => self.add(@types.Token::RBRACKET)
    '{' => self.add(@types.Token::LCURLYBRACKET)
    '}' => self.add(@types.Token::RCURLYBRACKET)
    ':' => self.add(@types.Token::COLON)
    ';' => self.add(@types.Token::SEMICOLON)
    ',' => self.add(@types.Token::COMMA)
    '.' => self.add(@types.Token::DOT)
    '+' => self.add(@types.Token::ADD)
    '-' =>
      if self.match_char('>') {
        self.add(@types.Token::ARROW)
      } else {
        self.add(@types.Token::SUB)
      }
    '*' => self.add(@types.Token::MUL)
    '/' =>
      if self.match_char('/') {
        while self.peek() != '\n' && not(self.is_at_end()) {
          self.current += 1
        }
      } else {
        self.add(@types.Token::DIV)
      }
    '=' =>
      if self.match_char('=') {
        self.add(@types.Token::EQ)
      } else {
        self.add(@types.Token::ASSIGN)
      }
    '<' =>
      if self.match_char('=') {
        self.add(@types.Token::LE)
      } else {
        self.add(@types.Token::LT)
      }
    '>' =>
      if self.match_char('=') {
        self.add(@types.Token::GE)
      } else {
        self.add(@types.Token::GT)
      }
    '\n' => self.line += 1
    '"' => self.error("String literals not supported")
    c =>
      if is_whitespace(c) {
        // do nothing
      } else if is_numeric(c) {
        self.add_number()
      } else if is_alphabetic(c) {
        self.add_identifier()
      } else {
        self.error("Unexpected character")
        println(c)
      }
  }
}

fn Scanner::scan_tokens(self : Scanner) -> Array[@types.Token] {
  while not(self.is_at_end()) {
    self.start = self.current
    self.scan_token()
  }
  return self.tokens
}

test "tokenize double literal and integer literal" {
  let scanner = Scanner::new(
    "let x = 123.456; let y = 123;",
    @util.IndentLogger::new(Buffer::new()),
  )
  let tokens = scanner.scan_tokens()
  assert_eq!(
    tokens,
    [
      @types.Token::LET,
      @types.Token::IDENTIFIER("x"),
      @types.Token::ASSIGN,
      @types.Token::DOUBLE_LITERAL(123.456),
      @types.Token::SEMICOLON,
      @types.Token::LET,
      @types.Token::IDENTIFIER("y"),
      @types.Token::ASSIGN,
      @types.Token::INT_LITERAL(123),
      @types.Token::SEMICOLON,
    ],
  )
}

test "tokenize identifier" {
  let scanner = Scanner::new(
    "let aaabbb = 123; fn main() { meow();}",
    @util.IndentLogger::new(Buffer::new()),
  )
  let tokens = scanner.scan_tokens()
  assert_eq!(
    tokens,
    [
      @types.Token::LET,
      @types.Token::IDENTIFIER("aaabbb"),
      @types.Token::ASSIGN,
      @types.Token::INT_LITERAL(123),
      @types.Token::SEMICOLON,
      @types.Token::FN,
      @types.Token::IDENTIFIER("main"),
      @types.Token::LPAREN,
      @types.Token::RPAREN,
      @types.Token::LCURLYBRACKET,
      @types.Token::IDENTIFIER("meow"),
      @types.Token::LPAREN,
      @types.Token::RPAREN,
      @types.Token::SEMICOLON,
      @types.Token::RCURLYBRACKET,
    ],
  )
}

test "tokenize if-else statements" {
  let scanner = Scanner::new(
    "if (x > 0) { print(x); } else { print(-x); }",
    @util.IndentLogger::new(Buffer::new()),
  )
  let tokens = scanner.scan_tokens()
  assert_eq!(
    tokens,
    [
      @types.Token::IF,
      @types.Token::LPAREN,
      @types.Token::IDENTIFIER("x"),
      @types.Token::GT,
      @types.Token::INT_LITERAL(0),
      @types.Token::RPAREN,
      @types.Token::LCURLYBRACKET,
      @types.Token::IDENTIFIER("print"),
      @types.Token::LPAREN,
      @types.Token::IDENTIFIER("x"),
      @types.Token::RPAREN,
      @types.Token::SEMICOLON,
      @types.Token::RCURLYBRACKET,
      @types.Token::ELSE,
      @types.Token::LCURLYBRACKET,
      @types.Token::IDENTIFIER("print"),
      @types.Token::LPAREN,
      @types.Token::SUB,
      @types.Token::IDENTIFIER("x"),
      @types.Token::RPAREN,
      @types.Token::SEMICOLON,
      @types.Token::RCURLYBRACKET,
    ],
  )
}

test "tokenize >= > <= <" {
  let scanner = Scanner::new(
    "if x>=0 { if y<0 {} }",
    @util.IndentLogger::new(Buffer::new()),
  )
  let tokens = scanner.scan_tokens()
  assert_eq!(
    tokens,
    [
      @types.Token::IF,
      @types.Token::IDENTIFIER("x"),
      @types.Token::GE,
      @types.Token::INT_LITERAL(0),
      @types.Token::LCURLYBRACKET,
      @types.Token::IF,
      @types.Token::IDENTIFIER("y"),
      @types.Token::LT,
      @types.Token::INT_LITERAL(0),
      @types.Token::LCURLYBRACKET,
      @types.Token::RCURLYBRACKET,
      @types.Token::RCURLYBRACKET,
    ],
  )
}

pub fn pass_tokenize(ctx : @types.Ctx) -> @types.Ctx {
  let scanner = Scanner::new(ctx.code, ctx.log)
  let tokens = scanner.scan_tokens()
  { ..ctx, tokens: Some(tokens) }
}
