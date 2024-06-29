import React, { useId, useState } from 'react'
import {
  Breakpoint,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Icon,
  IconButton
} from '@mui/material'
import Draggable, { DraggableProps } from 'react-draggable'

interface DraggableFloatingDialogProps {
  title: string
  canBeClosed?: boolean
  handleClose?: () => void
  actions?: React.ReactNode
  draggableProps?: Partial<DraggableProps>
  dialogProps?: Partial<DialogProps>
  maxWidth?: Breakpoint
}

export default function DraggableFloatingDialog({
  title,
  canBeClosed = true,
  handleClose,
  actions,
  draggableProps,
  dialogProps,
  maxWidth,
  children
}: DraggableFloatingDialogProps & { children?: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  const nodeRef = React.useRef(null)
  const titleId = useId()

  const handleDialogClose = () => {
    setOpen(false)
    if (handleClose) {
      handleClose()
    }
  }

  return (
    open && (
      <Draggable
        handle={`#${titleId}`}
        cancel={'[class*="MuiDialogContent-root"]'}
        nodeRef={nodeRef}
        {...draggableProps}
      >
        <div className="floating-overlay" ref={nodeRef}>
          <Dialog
            open
            hideBackdrop
            disableEnforceFocus
            disableAutoFocus
            disableScrollLock
            disablePortal
            maxWidth={maxWidth || 'xs'}
            aria-labelledby={titleId}
            container={() =>
              document.querySelector('.floating-overlay') as HTMLElement
            }
            {...dialogProps}
          >
            <DialogTitle style={{ cursor: 'move' }} id={titleId}>
              {title}
            </DialogTitle>

            {canBeClosed && (
              <IconButton
                aria-label="close"
                onClick={handleDialogClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500]
                }}
              >
                <Icon>close</Icon>
              </IconButton>
            )}
            <DialogContent dividers sx={{ p: 0 }}>
              <DialogContentText component="div">{children}</DialogContentText>
            </DialogContent>
            {actions && <DialogActions>{actions}</DialogActions>}
          </Dialog>
        </div>
      </Draggable>
    )
  )
}
