export const toPx = n => `${n}px`
export const toRem = n => `${n}rem`

export const borders = [0, '1px solid', '2px solid', '2px dashed']

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
const black = '#000000'

// https://palx.jxnblk.com/067df7
// https://github.com/yeun/open-color
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
  black,
  black95: 'rgba(0,0,0,0.95)',
  black90: 'rgba(0,0,0,0.9)',
  black80: 'rgba(0,0,0,0.8)',
  black70: 'rgba(0,0,0,0.7)',
  black60: 'rgba(0,0,0,0.6)',
  black50: 'rgba(0,0,0,0.5)',
  black40: 'rgba(0,0,0,0.4)',
  black30: 'rgba(0,0,0,0.3)',
  black20: 'rgba(0,0,0,0.2)',
  black10: 'rgba(0,0,0,0.1)',
  black05: 'rgba(0,0,0,0.05)',
  black025: 'rgba(0,0,0,0.025)',
  black0125: 'rgba(0,0,0,0.0125)',
  white95: 'rgba(255,255,255,0.95)',
  white90: 'rgba(255,255,255,0.9)',
  white80: 'rgba(255,255,255,0.8)',
  white70: 'rgba(255,255,255,0.7)',
  white60: 'rgba(255,255,255,0.6)',
  white50: 'rgba(255,255,255,0.5)',
  white40: 'rgba(255,255,255,0.4)',
  white30: 'rgba(255,255,255,0.3)',
  white20: 'rgba(255,255,255,0.2)',
  white10: 'rgba(255,255,255,0.1)',
  white05: 'rgba(255,255,255,0.05)',
  white025: 'rgba(255,255,255,0.025)',
  white0125: 'rgba(255,255,255,0.0125)',
  red0: '#fff5f5',
  red1: '#ffe3e3',
  red2: '#ffc9c9',
  red3: '#ffa8a8',
  red4: '#ff8787',
  red5: '#ff6b6b',
  red: '#ff6b6b',
  red6: '#fa5252',
  red7: '#f03e3e',
  red8: '#e03131',
  red9: '#c92a2a',
  pink0: '#fff0f6',
  pink1: '#ffdeeb',
  pink2: '#fcc2d7',
  pink3: '#faa2c1',
  pink4: '#f783ac',
  pink5: '#f06595',
  pink: '#f06595',
  pink6: '#e64980',
  pink7: '#d6336c',
  pink8: '#c2255c',
  pink9: '#a61e4d',
  grape0: '#f8f0fc',
  grape1: '#f3d9fa',
  grape2: '#eebefa',
  grape3: '#e599f7',
  grape4: '#da77f2',
  grape5: '#cc5de8',
  grape: '#cc5de8',
  grape6: '#be4bdb',
  grape7: '#ae3ec9',
  grape8: '#9c36b5',
  grape9: '#862e9c',
  violet0: '#f3f0ff',
  violet1: '#e5dbff',
  violet2: '#d0bfff',
  violet3: '#b197fc',
  violet4: '#9775fa',
  violet5: '#845ef7',
  violet: '#845ef7',
  violet6: '#7950f2',
  violet7: '#7048e8',
  violet8: '#6741d9',
  violet9: '#5f3dc4',
  indigo0: '#edf2ff',
  indigo1: '#dbe4ff',
  indigo2: '#bac8ff',
  indigo3: '#91a7ff',
  indigo4: '#748ffc',
  indigo5: '#5c7cfa',
  indigo: '#5c7cfa',
  indigo6: '#4c6ef5',
  indigo7: '#4263eb',
  indigo8: '#3b5bdb',
  indigo9: '#364fc7',
  blue0: '#e7f5ff',
  blue1: '#d0ebff',
  blue2: '#a5d8ff',
  blue3: '#74c0fc',
  blue4: '#4dabf7',
  blue5: '#339af0',
  blue: '#339af0',
  blue6: '#228be6',
  blue7: '#1c7ed6',
  blue8: '#1971c2',
  blue9: '#1864ab',
  cyan0: '#e3fafc',
  cyan1: '#c5f6fa',
  cyan2: '#99e9f2',
  cyan3: '#66d9e8',
  cyan4: '#3bc9db',
  cyan5: '#22b8cf',
  cyan: '#22b8cf',
  cyan6: '#15aabf',
  cyan7: '#1098ad',
  cyan8: '#0c8599',
  cyan9: '#0b7285',
  teal0: '#e6fcf5',
  teal1: '#c3fae8',
  teal2: '#96f2d7',
  teal3: '#63e6be',
  teal4: '#38d9a9',
  teal5: '#20c997',
  teal: '#20c997',
  teal6: '#12b886',
  teal7: '#0ca678',
  teal8: '#099268',
  teal9: '#087f5b',
  green0: '#ebfbee',
  green1: '#d3f9d8',
  green2: '#b2f2bb',
  green3: '#8ce99a',
  green4: '#69db7c',
  green5: '#51cf66',
  green: '#51cf66',
  green6: '#40c057',
  green7: '#37b24d',
  green8: '#2f9e44',
  green9: '#2b8a3e',
  lime0: '#f4fce3',
  lime1: '#e9fac8',
  lime2: '#d8f5a2',
  lime3: '#c0eb75',
  lime4: '#a9e34b',
  lime5: '#94d82d',
  lime: '#94d82d',
  lime6: '#82c91e',
  lime7: '#74b816',
  lime8: '#66a80f',
  lime9: '#5c940d',
  yellow0: '#fff9db',
  yellow1: '#fff3bf',
  yellow2: '#ffec99',
  yellow3: '#ffe066',
  yellow4: '#ffd43b',
  yellow: '#fcc419',
  yellow5: '#fcc419',
  yellow6: '#fab005',
  yellow7: '#f59f00',
  yellow8: '#f08c00',
  yellow9: '#e67700',
  orange0: '#fff4e6',
  orange1: '#ffe8cc',
  orange2: '#ffd8a8',
  orange3: '#ffc078',
  orange4: '#ffa94d',
  orange: '#ff922b',
  orange5: '#ff922b',
  orange6: '#fd7e14',
  orange7: '#f76707',
  orange8: '#e8590c',
  orange9: '#d9480f'
}

export const maxWidths = [1, 2, 4, 8, 16, 32, 48, 64, 96].map(toRem)

export const fonts = {
  heading: inter,
  body: inter,
  monospace:
    '"Operator Mono", "Fira Code", "SF Mono", "Roboto Mono", Menlo, monospace'
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
  borders,
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
