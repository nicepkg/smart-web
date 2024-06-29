import { useSettingsStore } from '@/store/settings.store'
import { List, ListItem, Switch } from '@mui/material'

export default function PanelSettings() {
  const { showLog, setShowLog, hasHydrated } = useSettingsStore()

  if (!hasHydrated) {
    return <p>Loading...</p>
  }

  return (
    <List sx={{}}>
      <ListItem sx={{ pt: 3 }}>
        <Switch
          checked={showLog}
          onChange={() => setShowLog(!showLog)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </ListItem>
      <ListItem sx={{ pt: 3 }} />
    </List>
  )
}
