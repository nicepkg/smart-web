import { Button, Icon } from '@mui/material'

export default function PanelActions() {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<Icon>add</Icon>}
        sx={{ mr: 1 }}
      >
        新建
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<Icon>edit</Icon>}
        sx={{ mr: 1 }}
      >
        编辑
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<Icon>delete</Icon>}
        sx={{ mr: 1 }}
      >
        删除
      </Button>
    </>
  )
}
