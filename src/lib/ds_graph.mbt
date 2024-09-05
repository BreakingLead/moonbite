pub struct Graph[Node, Edge] {
  mut nodes : Array[Node]
  mut edges : Array[Edge]
}

pub fn Graph::new[Node, Edge]() -> Graph[Node, Edge] {
  { nodes: Array::new(), edges: Array::new() }
}

// 官网上的例子说它和下面的等价，但是实际上lsp会报错。无语。
// pub fn Graph::add_node(node : Node) -> Graph[Node, Edge] {
//   self.nodes.push(node)
//   self
// }

pub fn add_node[Node, Edge](self : Graph[Node, Edge], node : Node) -> Unit {
  self.nodes.push(node)
}
