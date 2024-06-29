import { useEffect, useRef } from 'react'
import { useLogStore } from '@/store/log.store'

export default function PanelLog() {
  const { logItems } = useLogStore()
  const endOfList = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (endOfList.current) {
      endOfList.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [logItems])

  return (
    <div className=":uno: h-64 overflow-y-auto rounded-lg bg-gray-50 p-4 shadow-inner">
      <h2 className=":uno: mb-3 text-lg text-gray-700 font-semibold">Log</h2>
      <ul className=":uno: space-y-1">
        {logItems.map((item, index) => (
          <li
            key={index}
            className=":uno: rounded bg-white px-3 py-2 text-xs text-gray-600 font-mono shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
      <div ref={endOfList} />
    </div>
  )
}
