type StringBuf Array[Char]

fn is_whitespace(c : Char) -> Bool {
  match c {
    '\n' | '\r' | '\t' | ' ' => true
    _ => false
  }
}

test "random input test cases" {
  assert_false!(is_whitespace('x'))
  assert_false!(is_whitespace('y'))
  assert_false!(is_whitespace('z'))
  assert_false!(is_whitespace('A'))
  assert_false!(is_whitespace('B'))
  assert_false!(is_whitespace('C'))
  assert_true!(is_whitespace('\n'))
  assert_true!(is_whitespace('\r'))
  assert_true!(is_whitespace('\t'))
  assert_true!(is_whitespace(' '))
  assert_false!(is_whitespace(':'))
}

// 不知道是怎么写出来的
// 还在修 bug
fn split_whitespaces(code : String) -> Iter[String] {
  let len = code.length()
  Iter::new(
    fn(yield) {
      let mut start = 0
      let mut curr_len = 0
      while start < len {
        if is_whitespace(code[start]) {
          start += 1
        } else {
          curr_len = start
          while not(is_whitespace(code[start + curr_len])) { // && start + curr_len < len {
            curr_len += 1
          } else {
            if yield(code.substring(~start, end=start + curr_len)) == IterEnd {
              println("yield end") // do not display anything???
              break IterEnd
            }
            break IterContinue
          }
        }
      } else {
        // never
        IterContinue
      }
    },
  )
}

fn split_whitespaces_easier_version(code : String) -> Array[String] {
  let res = Array::new()
  let mut buf = Buffer::new()
  let mut should_write = false
  for i in code {
    if is_whitespace(i) {
      if should_write {
        res.push(buf.to_string())
        buf = Buffer::new()
      }
      should_write = false
      continue
    } else {
      should_write = true
      buf.write_char(i)
    }
  }
  res
}

test "split whitespaces" {
  let a = split_whitespaces_easier_version(
    "   hello   world\n why\t  it is       so::messy    ",
  )
  assert_eq!(a, ["hello", "world", "why", "it", "is", "so::messy"])
}

pub fn tokenize(ctx : Ctx) -> Ctx {
  let code = ctx.code
  { ..ctx, tokens: Some(Array::new()) }
}
