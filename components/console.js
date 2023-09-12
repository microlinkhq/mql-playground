import { Box, Flex, Paragraph } from 'theme-ui'
import { colors } from '@/theme'

const COLORS = {
  log: {
    color: colors.gray8,
    borderColor: colors.gray1
  },
  warn: {
    color: colors.orange8,
    background: colors.orange0,
    borderColor: colors.orange2
  },
  error: {
    color: colors.red8,
    background: colors.red0,
    borderColor: colors.red2
  }
}

/**
 * https://teenyicons.com/
 */
const ICON = {
  warn: () => <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' width='15' height='15'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM7 8V4h1v4H7zm1 2v1.01H7V10h1z' fill='currentColor' /></svg>,
  error: () => <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' width='15' height='15'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm10.146 3.354L7.5 8.207l-2.646 2.647-.708-.707L6.793 7.5 4.146 4.854l.708-.708L7.5 6.793l2.646-2.647.708.708L8.207 7.5l2.647 2.646-.707.708z' fill='currentColor' /></svg>
}

export const Console = ({ type, ...props }) => {
  const { color, background, borderColor } = COLORS[type]
  const Icon = ICON[type]
  return (
    <Flex sx={{
      py: 2,
      px: 3,
      alignItems: 'center',
      borderBottom: 1,
      borderColor,
      color,
      background
    }}
    >
      {Icon && <Box sx={{ pr: 2, position: 'relative', bottom: '-2px' }}><Icon /></Box>}
      <Paragraph {...props} />
    </Flex>
  )
}
