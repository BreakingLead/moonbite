pub struct Node {
  id : String
  label : String
}

pub struct Edge {
  from : Int
  to : Int
  label : String?
}

pub struct Graphviz {
  mut node_id : Int
  mut nodes : Array[Node]
  mut edges : Array[Edge]
}

pub fn Graphviz::new() -> Graphviz {
  { nodes: Array::new(), edges: Array::new(), node_id: 0 }
}

pub fn Graphviz::to_string(self : Graphviz) -> String {
  let result = Buffer::new()
  result.write_string("digraph G {\n")
  for node in self.nodes {

    // use + rather than interpolation to avoid escaping
    result.write_string(
      "\{node.id} [label=\"" + node.label.to_string() + "\"];\n",
    )
  }
  for edge in self.edges {
    if edge.label.is_empty() {
      result.write_string("node_\{edge.from} -> node_\{edge.to}\n")
    } else {
      result.write_string(
        "node_\{edge.from} -> node_\{edge.to} [label=" +
        edge.label.to_string() +
        "];\n",
      )
    }
  }
  result.write_string("}\n")
  result.to_string()
}

pub fn Graphviz::add_node(self : Graphviz, node : String) -> Int {
  self.nodes.push({ id: "node_" + self.node_id.to_string(), label: node })
  self.node_id += 1
  return self.node_id - 1
}

pub fn Graphviz::add_edge(
  self : Graphviz,
  f : Int,
  t : Int,
  ~label : String? = None
) -> Unit {
  self.edges.push(Edge::new(f, t, ~label))
}

pub fn Node::new(id : String, label : String) -> Node {
  { id, label }
}

pub fn Edge::new(from : Int, to : Int, ~label : String? = None) -> Edge {
  { from, to, label }
}

pub fn Graphviz::render(self : Graphviz, filename : String) -> Unit {
  @fs.write_to_string(filename, self.to_string())
}
