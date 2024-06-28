import { Theme, ThemeProvider } from '@emotion/react'

import ConfigPanel from '@/components/config-panel'
import { ErrorBoundary } from '@/components/error-boundary'
import FloatingButton from '@/components/floating-button'
import LogPanel from '@/components/log-panel'

export const theme: Theme = {
  colors: {
    primary: 'rgb(255, 255, 255)', // 60%
    secondary: 'rgb(230, 230, 230)', // 30%
    active: '#2196f3', // 10%
    activeSecondary: 'rgb(231, 243, 255)',
    error: 'rgb(231, 71, 93)'
  }
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <LogPanel />
          <ConfigPanel />
          <FloatingButton />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  )
}
