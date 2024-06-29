import { SettingConfig } from '@icon-park/react'
import { Fab } from '@mui/material'

export interface FloatingButtonProps {
  onClick?: () => void
}
export default function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <Fab color="primary" aria-label="setting" onClick={onClick}>
      <SettingConfig theme="outline" size="24" fill="#333" />
    </Fab>
  )
}
