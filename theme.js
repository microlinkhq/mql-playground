export const toPx = n => `${n}px`
export const toRem = n => `${n}rem`

const inter =
  '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif'

export const speed = {
  quickly: 150,
  normal: 300,
  slowly: 450
}

export const transitions = {
  short: `${speed.quickly}ms cubic-bezier(.25,.8,.25,1)`,
  medium: `${speed.normal}ms cubic-bezier(.25,.8,.25,1)`,
  long: `${speed.slowly}ms cubic-bezier(.4, 0, .2, 1)`
}

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map(toPx)

const white = '#ffffff'
const gray0 = '#F8F9FA'
const gray1 = '#F1F3F5'
const gray2 = '#E9ECEF'
const gray3 = '#DEE2E6'
const gray4 = '#CED4DA'
const gray5 = '#ADB5BD'
const gray6 = '#868E96'
const gray7 = '#495057'
const gray8 = '#343A40'
const gray9 = '#212529'
const black = '#000'

export const colors = {
  primary: '#067df7',
  text: gray0,
  background: gray0,
  border: gray3,
  secondary: '#29BC9B',
  highlight: '#EA407B',
  accent: '#EA407B',
  gray0,
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  gray6,
  gray7,
  gray8,
  gray9,
  white,
  black
}

export const maxWidths = [1, 2, 4, 8, 16, 32, 48, 64, 96].map(toRem)

export const fonts = {
  heading: inter,
  body: inter,
  monospace: 'monospace'
}

export const letterSpacings = {
  body: 'normal',
  caps: '0.1em'
}

export const lineHeights = [1, 1.15, 1.5, 1.8]

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96].map(toPx)

export const radii = [0, 2, 4, 6, 8].map(toPx)

export const fontWeights = {
  normal: 400,
  semibold: 600,
  bold: 700
}

export const layout = {
  small: '480px',
  medium: '560px',
  large: '720px'
}

export const breakpoints = ['40em', '52em', '64em']

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  speed,
  transitions,
  radii,
  fonts,
  space,
  maxWidths,
  fontWeights,
  breakpoints,
  layout,
  fontSizes,
  colors,
  lineHeights: {
    heading: lineHeights[3],
    body: lineHeights[2]
  },
  letterSpacings,
  styles: {
    a: {
      textDecoration: 'none'
    }
  },
  buttons: {
    primary: {
      opacity: 0.8,
      borderRadius: radii[2],
      cursor: 'pointer',
      fontFamily: 'heading',
      fontWeight: 'bold',
      '&:hover:not([disabled])': {
        opacity: 1,
        borderColor: 'gray7',
        color: 'gray1'
      },
      '&:disabled': {
        borderColor: 'border'
      }
    }
  },
  text: {
    paragraph: {
      lineHeight: 'body',
      fontFamily: 'body',
      fontSize: [2, 2, 2]
    },
    heading: {
      color: 'gray9',
      lineHeight: 'heading',
      fontSize: [5, 6, 7],
      fontFamily: 'heading',
      fontWeight: 'bold'
    },
    subhead: {
      lineHeight: 'heading',
      color: 'gray6',
      fontSize: [2, 2, 3],
      fontFamily: 'body',
      fontWeight: 'normal'
    }
  }
}
