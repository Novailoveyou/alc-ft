type UnionToIntersection<T> = (T extends T ? (arg: T) => 0 : never) extends (
  arg: infer I,
) => 0
  ? I
  : never

type TestUnionToIntersection = UnionToIntersection<'123' | '1234'>

type LastInUnion<U> = UnionToIntersection<
  U extends U ? (arg: U) => 0 : never
> extends (arg: infer Last) => 0
  ? Last
  : never

type TestLastInUnion = LastInUnion<1 | 2 | 123>

export type UnionToTuple<Union, Last = LastInUnion<Union>> = [Union] extends [
  never,
]
  ? []
  : [...UnionToTuple<Exclude<Union, Last>>, Last]

type TestUnionToTuple = UnionToTuple<1 | 2>
