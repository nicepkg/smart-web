import { useState } from 'react'
import { Theme, ThemeProvider } from '@emotion/react'

import DraggableFloatingDialog from '@/components/draggable-floating-dialog'
import { ErrorBoundary } from '@/components/error-boundary'
import FloatingButton from '@/components/floating-button'

import '@/styles/floating-overlay.css'

import TabPanel from '@/components/tab-panel'
import PanelActions from '@/components/tab-panel/panel-actions'

// const FloatingButton = (props: any) => null
// const DraggableFloatingDialog = (props: any) => null
// const TabPanel = (props: any) => null
// const PanelActions = (props: any) => null

export const theme: Theme = {
  colors: {
    primary: 'rgb(255, 255, 255)', // 60%
    secondary: 'rgb(230, 230, 230)', // 30%
    active: '#2196f3', // 10%
    activeSecondary: 'rgb(231, 243, 255)',
    error: 'rgb(231, 71, 93)'
  }
}

export default function App() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          {open && (
            <>
              <DraggableFloatingDialog
                title="Smart web"
                actions={<PanelActions />}
                canBeClosed
                handleClose={handleClose}
              >
                <TabPanel />
              </DraggableFloatingDialog>
            </>
          )}
          <FloatingButton
            onClick={() => {
              setOpen(true)
            }}
          />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  )
}
