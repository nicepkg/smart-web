import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export function createStore(devtoolsName: string) {
  const newCreate = (store: any) => {
    let result: any

    // https://github.com/pmndrs/zustand/issues/852#issuecomment-1059783350
    if (process.env.NODE_ENV === 'development') {
      result = create(
        devtools(store, {
          name: devtoolsName,
          anonymousActionType: `${devtoolsName}/Action`
        })
      )
    } else {
      result = create(store)
    }

    return result
  }

  return newCreate as typeof create
}
