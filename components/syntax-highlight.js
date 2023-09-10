import { colors, lineHeights } from '@/theme'
import { highlight } from 'sugar-high'
import { css } from '@emotion/react'
import { Box } from 'theme-ui'

export const SyntaxHighlight = ({ children, sx }) => (
  <Box
    as='pre'
    dangerouslySetInnerHTML={{
      __html: highlight(children)
    }}
    sx={{
      fontSize: 1,
      fontFamily: 'monospace',
      lineHeight: lineHeights[2],
      ...sx
    }}
    css={css`
      --sh-class: ${colors.black};
      --sh-identifier: ${colors.black};
      --sh-sign: ${colors.black50};
      --sh-string: ${colors.black};
      --sh-keyword: ${colors.black};
      --sh-comment: ${colors.black};
      --sh-jsxliterals: ${colors.black};
    `}
  />
)
