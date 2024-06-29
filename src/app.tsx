/* eslint-disable react/no-unknown-property */
import { useState } from 'react'

import DraggableFloatingDialog from '@/components/draggable-floating-dialog'
import { ErrorBoundary } from '@/components/error-boundary'
import FloatingButton from '@/components/floating-button'
import TabPanel from '@/components/tab-panel'
import PanelActions from '@/components/tab-panel/panel-actions'

// const FloatingButton = (props: any) => (
//   <div className=":uno: text-center sm:text-left">
//     <div className=":uno: text-sm font-bold hover:text-red"> App </div>
//   </div>
// )
// const DraggableFloatingDialog = (props: any) => null
// const TabPanel = (props: any) => null
// const PanelActions = (props: any) => null

export default function App() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ErrorBoundary>
        {open && (
          <>
            <DraggableFloatingDialog
              title="Smart web"
              actions={<PanelActions />}
              canBeClosed
              onClose={handleClose}
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
    </>
  )
}
