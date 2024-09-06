pub struct Ctx {
  // args : Args
  code : String
  tokens : Array[@types.Token]?
  // ast_tree : AstTree
  // cfg_graph : CfgGraph
  // symtab : SymTab
  // scope_tree : ScopeTree
  // dj_graph : DjGraph
  // et_tree : EtTree
  // instr_et : EtTree
  // ast2scope : Map[UInt, UInt]
  // symtab_graph : SymTabGraph
  // asm_structure : AsmStructure
  // def_use_graph : DefUseGraph
  // collected_nhwc_ir : InstrList
  // // io_task_list: Array<JoinHandle<Result<()>>>
  // call_graph : CallGraph
  // loop_tree : LoopTree
}

pub fn Ctx::new(code : String) -> Ctx {
  { code, tokens: None }
}

pub fn finish(self : Ctx) -> String {
  let b = Buffer::new()
  for i in self.tokens.unwrap() {
    b.write_string(i.to_string())
    b.write_char('\n')
  }
  b.to_string()
}
