import { Box } from 'theme-ui'
import { colors } from '@/theme'

const STATUS = {
  success: '#50e3c2',
  error: 'red'
}

export const Dot = ({ status, sx }) => {
  const color = STATUS[status]
  return (
    <Box
      sx={{
        display: 'inline-block',
        position: 'relative',
        width: '8px',
        height: '8px',
        borderRadius: 3,
        bg: color,
        boxShadow: `0 0 12px 0 ${color}`,
        ...sx
      }}
    />
  )
}
