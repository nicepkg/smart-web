import React, { useState } from 'react'
import { Tabs } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'

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
        <Box
          sx={{
            p: 0,
            maxWidth: 280,
            maxHeight: 300,
            minWidth: 260,
            minHeight: 200,
            overflow: 'auto'
          }}
        >
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `cx-auto-tab-${index}`,
    'aria-controls': `cx-auto-tabpanel-${index}`
  }
}

export default function TabPanel() {
  const [tab, setTab] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="状态" {...a11yProps(0)} />
          <Tab label="设定" {...a11yProps(1)} />
          <Tab label="关于" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tab} index={0}>
        <PanelLog />
      </CustomTabPanel>
      <>
        <CustomTabPanel value={tab} index={1}>
          <PanelSettings />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={2}>
          <PanelAbout />
        </CustomTabPanel>
      </>
    </Box>
  )
}