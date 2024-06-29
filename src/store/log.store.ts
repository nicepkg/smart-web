/* eslint-disable unused-imports/no-unused-vars */

import type { GetState } from './helpers/types'
import { createStore } from './helpers/utils'

export interface LogStore {
  logItems: string[]
  addLogItem: (logItem: string) => void
}

export type LogState = GetState<LogStore>

const getInitialState = () =>
  <LogState>{
    logItems: []
  }

export const useLogStore = createStore('LogStore')<LogStore, any>(
  (set, get) => ({
    ...getInitialState(),
    addLogItem: logItem => {
      set(state => ({
        ...state,
        logItems: [...state.logItems, logItem]
      }))
    }
  })
)
