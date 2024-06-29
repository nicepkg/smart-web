export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
export type RemoveNeverKeys<T> = {
  [K in keyof T as T[K] extends never ? never : K]: T[K]
}
