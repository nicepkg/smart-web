import Button from '@/components/button'

export default function PanelActions() {
  return (
    <div className=":uno: flex space-x-2">
      <Button loading variant="primary" size="md">
        新建
      </Button>
      <Button variant="secondary" size="md">
        编辑
      </Button>
      <Button variant="outline" size="md">
        删除
      </Button>
    </div>
  )
}
