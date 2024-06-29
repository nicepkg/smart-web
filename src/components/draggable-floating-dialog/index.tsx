import React, { useRef, useState } from 'react'
import { Close } from '@icon-park/react'
import Draggable from 'react-draggable'

import { useHashId } from '@/hooks/use-hash-id'

interface DraggableFloatingDialogProps {
  title: string
  canBeClosed?: boolean
  onClose?: () => void
  actions?: React.ReactNode
  draggableProps?: Partial<React.ComponentProps<typeof Draggable>>
  dialogProps?: React.HTMLAttributes<HTMLDivElement>
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  children?: React.ReactNode
}

export default function DraggableFloatingDialog({
  title,
  canBeClosed = true,
  onClose,
  actions,
  draggableProps,
  dialogProps,
  maxWidth = 'md',
  children
}: DraggableFloatingDialogProps) {
  const [isOpen, setIsOpen] = useState(true)
  const nodeRef = useRef(null)
  const titleId = useHashId()

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  if (!isOpen) return null

  return (
    <Draggable handle={`#${titleId}`} nodeRef={nodeRef} {...draggableProps}>
      <div
        ref={nodeRef}
        className=":uno: pointer-events-none fixed inset-0 z-99 flex touch-none select-none items-center justify-center"
      >
        <div
          role="dialog"
          aria-labelledby={titleId}
          className={`:uno: bg-white rounded-lg shadow-xl overflow-hidden pointer-events-auto
                      transform transition-all max-w-${maxWidth} w-full`}
          {...dialogProps}
        >
          <div
            id={titleId}
            className=":uno: flex cursor-move items-center justify-between bg-gray-100 p-4"
          >
            <h2 className=":uno: text-xl text-gray-800 font-semibold">
              {title}
            </h2>
            {canBeClosed && (
              <div
                onClick={handleClose}
                className=":uno: cursor-pointer text-gray-500 transition-colors hover:text-gray-700"
                aria-label="Close dialog"
              >
                <Close theme="outline" size="24" className=":uno: h-6 w-6" />
              </div>
            )}
          </div>
          <div className=":uno: dialog-content p-6">{children}</div>
          {actions && (
            <div className=":uno: flex justify-end bg-gray-50 p-4 space-x-3">
              {actions}
            </div>
          )}
        </div>
      </div>
    </Draggable>
  )
}
