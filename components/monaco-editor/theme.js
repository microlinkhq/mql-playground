import { colors } from '@/theme'

const theme = {
  base: 'vs',
  inherit: true,
  rules: [
    {
      background: colors.background,
      foreground: colors.primary,
      token: ''
    },
    {
      foreground: colors.gray6,
      token: 'comment'
    },
    {
      foreground: colors.gray9,
      token: 'string'
    },
    {
      foreground: colors.accent,
      token: 'string.key.json'
    },
    {
      foreground: colors.accent,
      token: 'delimiter.bracket.json'
    },
    {
      foreground: colors.gray7,
      token: 'delimiter.parenthesis.js'
    },
    {
      foreground: colors.gray7,
      token: 'delimiter.bracket.js'
    },
    {
      foreground: colors.accent,
      token: 'constant.language'
    },
    {
      foreground: colors.accent,
      token: 'variable.language'
    },
    {
      foreground: colors.accent,
      token: 'variable.other'
    },
    {
      foreground: colors.accent,
      token: 'keyword'
    },
    {
      foreground: colors.primary,
      token: 'keyword.json'
    },
    {
      foreground: colors.primary,
      token: 'string.value.json'
    },
    {
      foreground: colors.accent,
      token: 'delimiter'
    }
  ],
  colors: {
    'editor.background': colors.background,
    'editor.lineHighlightBackground': colors.background,
    'editorLineNumber.foreground': colors.gray5,
    'editorLineNumber.activeForeground': colors.gray7,
    'editorCursor.foreground': colors.gray7,
    'editor.selectionBackground': colors.gray3
  }
}

export default theme
