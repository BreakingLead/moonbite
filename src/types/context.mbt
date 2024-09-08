pub struct Ctx {
  // args : Args
  code : String
  tokens : Array[Token]?
  ast_tree : Syntax?
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

  // log
  log : @util.IndentLogger
  error : Bool
}

pub fn Ctx::new(code : String) -> Ctx {
  {
    code,
    tokens: None,
    ast_tree: None,
    log: @util.IndentLogger::new(Buffer::new()),
    error: false,
  }
}

pub fn finish(self : Ctx) -> String {
  let ast = self.ast_tree.unwrap()
  let g = ast.to_graphviz()
  g.render("ast.dot")
  ast.to_sexpr()
}
