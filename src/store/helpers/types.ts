import type { RemoveNeverKeys } from '@/types/common'

export type GetState<Slice> =
  Slice extends Record<string, any>
    ? RemoveNeverKeys<{
        [K in keyof Slice]: Slice[K] extends (...args: any[]) => any
          ? never
          : Slice[K]
      }>
    : never

export type GetActions<Slice> =
  Slice extends Record<string, any>
    ? RemoveNeverKeys<{
        [K in keyof Slice]: Slice[K] extends (...args: any[]) => any
          ? Slice[K]
          : never
      }>
    : never
