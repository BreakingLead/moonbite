fn main {
  let code = @fs.read_to_string("run/tmp.in")
  let ctx = @lib.Ctx::new(code) |> @lib.tokenize
  let result = ctx.finish()
  @fs.write_to_string("run/tmp.out", result)
}
