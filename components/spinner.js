import { css, keyframes } from '@emotion/react'
import { Box } from 'theme-ui'

const spin = keyframes`
  to { transform: translateY(-15.0em); }`

export const Spinner = props => (
  <Box
    css={css`
      display: inline-block;
      overflow: hidden;
      height: 1.3em;
      margin-top: -0.3em;
      line-height: 1.5em;
      vertical-align: text-bottom;

      &::after {
        display: inline-table;
        white-space: pre;
        text-align: left;
        content: '⠋\A⠙\A⠹\A⠸\A⠼\A⠴\A⠦\A⠧\A⠇\A⠏';
        animation: ${spin} 300ms steps(10) infinite;
      }
    `}
    {...props}
  />
)
