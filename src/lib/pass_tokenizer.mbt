type StringBuf Array[Char]

fn is_whitespace(c : Char) -> Bool {
  match c {
    '\n' | '\r' | '\t' | ' ' => true
    _ => false
  }
}

// 不知道是怎么写出来的
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
          while not(is_whitespace(code[start + curr_len])) &&
                start + curr_len < len {
            curr_len += 1
          } else {
            if yield(code.substring(~start, end=start + curr_len)) == IterEnd {
              break IterEnd
            }
            break IterContinue
          }
        }
      } else {
        // never
        IterEnd
      }
    },
  )
}

test "split_whitespaces" {
  let a = split_whitespaces("hello   world\n").collect()
  assert_eq!(a, ["hello", "world"])
}

pub fn tokenize(ctx : Ctx) -> Ctx {
  let code = ctx.code
  { ..ctx, tokens: Some(Array::new()) }
}
