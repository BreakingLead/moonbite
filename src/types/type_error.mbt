pub type! MBError {
  TokenizeError(String)
  ParseError(String)
  TypeCheckError(String)
} derive(Show)
