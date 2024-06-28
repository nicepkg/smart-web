/* eslint-disable unused-imports/no-unused-vars */
import React from 'react'

import { Logger } from '../helpers/logger'

export class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  logger: Logger

  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
    this.logger = new Logger({ label: 'ErrorBoundary' })
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: any, info: { componentStack: any }) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    this.logger.log(error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    return this.props.children
  }
}
