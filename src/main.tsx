import 'virtual:uno.css'

import { onloadSafe } from '@/helpers/utils'
import sentinel from 'sentinel-js'

import '@/helpers/i18n'
import '@icon-park/react/styles/index.css'

import App from '@/app'
import { createRoot } from 'react-dom/client'

main()

function main() {
  onloadSafe(() => {
    const container = document.createElement('div')
    const root = createRoot(container)
    root.render(<App />)

    sentinel.on('body', body => {
      body.append(container)
    })
  })
}
