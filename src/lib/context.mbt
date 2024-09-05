pub struct Ctx {
  // args : Args
  code : String
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

pub fn new(code : String) -> Ctx {
  { code, }
}

pub fn finish(self : Ctx) -> String {
  self.code
}
