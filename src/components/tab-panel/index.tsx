import React, { useState } from 'react'
import clsx from 'clsx'

import PanelAbout from './panel-about'
import PanelLog from './panel-log'
import PanelSettings from './panel-settings'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`cx-auto-tabpanel-${index}`}
      aria-labelledby={`cx-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className=":uno: max-h-[300px] max-w-[280px] min-h-[200px] min-w-[260px] overflow-auto p-4">
          {children}
        </div>
      )}
    </div>
  )
}

export default function TabPanel() {
  const [tab, setTab] = useState(0)

  const handleChange = (newValue: number) => {
    setTab(newValue)
  }

  const tabs = [
    { label: '状态', content: <PanelLog /> },
    { label: '设定', content: <PanelSettings /> },
    { label: '关于', content: <PanelAbout /> }
  ]

  return (
    <div className=":uno: w-full">
      <div className=":uno: border-b border-gray-200">
        <nav className=":uno: flex" aria-label="Tabs">
          {tabs.map((item, index) => (
            <div
              key={index}
              onClick={() => handleChange(index)}
              className={clsx(
                ':uno: py-2 px-4 text-sm font-medium border-b-2  transition-colors duration-200',
                tab === index
                  ? ':uno: border-blue-500 text-blue-600'
                  : ':uno: border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
              id={`cx-auto-tab-${index}`}
              aria-controls={`cx-auto-tabpanel-${index}`}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </div>
      {tabs.map((item, index) => (
        <CustomTabPanel key={index} value={tab} index={index}>
          {item.content}
        </CustomTabPanel>
      ))}
    </div>
  )
}
