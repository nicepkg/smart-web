import React, { useRef } from 'react'
import { SettingConfig } from '@icon-park/react'
import Draggable from 'react-draggable'

export interface FloatingButtonProps {
  onClick?: () => void
  draggableProps?: Partial<React.ComponentProps<typeof Draggable>>
}

export default function FloatingButton({
  onClick,
  draggableProps
}: FloatingButtonProps) {
  const nodeRef = useRef(null)

  return (
    <Draggable nodeRef={nodeRef} {...draggableProps}>
      <div
        ref={nodeRef}
        className=":uno: fixed bottom-4 right-4 z-50 h-14 w-14 flex cursor-pointer touch-none select-none items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-colors duration-300 hover:bg-blue-600"
        aria-label="setting"
        onClick={onClick}
      >
        <SettingConfig theme="outline" size="24" fill="#ffffff" />
      </div>
    </Draggable>
  )
}
