'use client'
import { AppProgressBar } from 'next-nprogress-bar'

const ProgressBar = () => (
  <AppProgressBar
    height='4px'
    color='hsl(var(--primary))'
    options={{ showSpinner: false }}
    shallowRouting
  />
)

export default ProgressBar
