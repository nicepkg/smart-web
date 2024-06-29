import { useEffect, useRef } from 'react'
import { useLogStore } from '@/store/log.store'
import { List, ListItem, ListItemText } from '@mui/material'

export default function PanelLog() {
  const { logItems } = useLogStore()
  const endOfList = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (endOfList.current) {
      endOfList.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [logItems])

  return (
    <List dense sx={{}}>
      {logItems.map((item, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={item}
            sx={{ typography: 'overline', lineHeight: 'normal', px: 0, my: 0 }}
            disableTypography
          />
        </ListItem>
      ))}
      <div ref={endOfList} />
    </List>
  )
}
