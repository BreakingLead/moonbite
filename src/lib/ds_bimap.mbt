pub struct BiMap[A, B] {
  mut a_to_b : Map[A, B]
  mut b_to_a : Map[B, A]
} derive(Show)

pub fn BiMap::new[A, B]() -> BiMap[A, B] {
  { a_to_b: Map::new(capacity=64), b_to_a: Map::new(capacity=64) }
}

pub fn insert[A : Hash + Eq, B : Hash + Eq](
  self : BiMap[A, B],
  a : A,
  b : B
) -> Unit {
  self.a_to_b.set(a, b)
  self.b_to_a.set(b, a)
}

pub fn get_b_from_a[A : Hash + Eq, B : Hash + Eq](
  self : BiMap[A, B],
  a : A
) -> B? {
  self.a_to_b.get(a)
}

pub fn get_a_from_b[A : Hash + Eq, B : Hash + Eq](
  self : BiMap[A, B],
  b : B
) -> A? {
  self.b_to_a.get(b)
}
