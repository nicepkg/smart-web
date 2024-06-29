/* eslint-disable unused-imports/no-unused-vars */
import { createJSONStorage, persist } from 'zustand/middleware'

import GMStorage from './helpers/gm-storage'
import type { GetState } from './helpers/types'
import { createStore } from './helpers/utils'

export interface SettingsStore {
  hasHydrated: boolean
  setHasHydrated: (hasHydrated: boolean) => void
  showLog: boolean
  setShowLog: (showLog: boolean) => void
}

export type SettingsState = GetState<SettingsStore>

const getInitialState = () =>
  <SettingsState>{
    hasHydrated: false,
    showLog: false
  }

export const useSettingsStore = createStore('SettingsStore')(
  persist<SettingsStore, any>(
    (set, get) => ({
      ...getInitialState(),
      setHasHydrated(hasHydrated) {
        set({ hasHydrated })
      },

      setShowLog(showLog) {
        set({ showLog })
      }
    }),
    {
      name: 'smart-web:settings-store',
      storage: createJSONStorage(() => GMStorage),
      onRehydrateStorage: () => (state: any) => {
        if (state) {
          state.setHasHydrated(true)
        }
      }
    }
  )
)
