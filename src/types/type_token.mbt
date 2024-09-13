pub enum Token {
  TRUE
  FALSE
  UNIT
  BOOL
  INT
  DOUBLE
  ARRAY
  NOT
  IF
  ELSE
  FN
  LET
  INT_LITERAL(Int)
  DOUBLE_LITERAL(Double)
  IDENTIFIER(String)
  DOT
  ADD
  SUB
  MUL
  DIV
  ASSIGN
  EQ
  NE // new
  LE
  LT // new
  GE // new
  GT // new
  LPAREN
  RPAREN
  LBRACKET
  RBRACKET
  LCURLYBRACKET
  RCURLYBRACKET
  ARROW
  COLON
  SEMICOLON
  COMMA
  EOF // new
} derive(Show, Eq)
