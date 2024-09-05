pub struct Node[T] {
  value : T
  parent : Node[T]?
  children : Array[Node[T]]
}

type Tree[T] Node[T]

pub fn Tree::new[T](root : Node[T]) -> Tree[T] {
  Tree(root)
}
