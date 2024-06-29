import { useSettingsStore } from '@/store/settings.store'

export default function PanelSettings() {
  const { showLog, setShowLog, hasHydrated } = useSettingsStore()

  if (!hasHydrated) {
    return (
      <div className=":uno: h-full flex items-center justify-center">
        <div className=":uno: animate-pulse text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className=":uno: rounded-lg bg-white p-6 shadow-md">
      <h2 className=":uno: mb-6 text-2xl text-gray-800 font-semibold">
        Settings
      </h2>
      <ul className=":uno: space-y-4">
        <li className=":uno: flex items-center justify-between">
          <span className=":uno: text-gray-700">Show Log</span>
          <label className=":uno: relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className=":uno: sr-only"
              checked={showLog}
              onChange={() => setShowLog(!showLog)}
              aria-label="Toggle show log"
            />
            <div className=":uno: h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:border after:border-gray-300 after:rounded-full after:bg-white peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white" />
          </label>
        </li>
      </ul>
    </div>
  )
}
