'use client'

import { ThemeUIProvider } from 'theme-ui'

import EmotionRootStyleRegistry from './emotion-root-style-registry'

import theme from '../theme'

const Providers = ({ children }) => {
  return (
    <EmotionRootStyleRegistry>
      <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
    </EmotionRootStyleRegistry>
  )
}

export default Providers
