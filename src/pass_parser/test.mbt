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
  assert_eq!(syntax.to_sexpr(), "(= #t (not (<= 2 1)))")
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
  assert_eq!(params, [("a", @types.Type::Int), ("b", @types.Type::Double)])
}

test "type mark Unit" {
  let tokens = [@types.Token::LPAREN, @types.Token::RPAREN]
  let parser = Parser::new(tokens)
  let ty = parser.type_annotation()
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
  assert_eq!(ty, @types.Type::Tuple([@types.Type::Int, @types.Type::Bool]))
}

test "type mark Function" {
  // (Int, Bool) -> Double
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

test "type mark Array[Int]" {
  let tokens = [
    @types.Token::ARRAY,
    @types.Token::LBRACKET,
    @types.Token::INT,
    @types.Token::RBRACKET,
  ]
  let parser = Parser::new(tokens)
  let ty = parser.type_annotation()
  assert_eq!(ty, @types.Type::Array(@types.Type::Int))
}

test "type mark Array[Array[Int]]" {
  let tokens = [
    @types.Token::ARRAY,
    @types.Token::LBRACKET,
    @types.Token::ARRAY,
    @types.Token::LBRACKET,
    @types.Token::INT,
    @types.Token::RBRACKET,
    @types.Token::RBRACKET,
    @types.Token::RBRACKET,
  ]
  let parser = Parser::new(tokens)
  let ty = parser.type_annotation()
  assert_eq!(ty, @types.Type::Array(@types.Type::Array(@types.Type::Int)))
}

test "fn decl" {
  let scanner = @pass_lex.Scanner::new(
    #| let r: Int = 1;
    #| fn another(a: Double, b: Double) -> Double { a + b };
    ,
  )
  let parser = Parser::new(scanner.scan_tokens())
  parser.print_errors()
  let d = parser.top_level()
  println(d.to_sexpr())
}
