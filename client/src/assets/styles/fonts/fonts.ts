import { modularScale } from 'polished';

const baseFontFamilies = {
  roboto: "'Roboto', sans-serif;",
  robotoSlab: "'Roboto Slab', serif;",
  raleway: "'Raleway', sans-serif;",
}

const fontFamilies = {
  ...baseFontFamilies,
  heading: baseFontFamilies.robotoSlab,
  primary: baseFontFamilies.roboto,
  secondary: baseFontFamilies.raleway
}

const baseFontSizes = {
  base: '1rem',
  scale: 1.33333,
}

const fontSizes = {
  xsmaller: modularScale(-4, baseFontSizes.base, baseFontSizes.scale),
  xsmall: modularScale(-3, baseFontSizes.base, baseFontSizes.scale),
  smaller: modularScale(-2, baseFontSizes.base, baseFontSizes.scale),
  small: modularScale(-1, baseFontSizes.base, baseFontSizes.scale),
  normal: modularScale(0, baseFontSizes.base, baseFontSizes.scale),
  large: modularScale(1, baseFontSizes.base, baseFontSizes.scale),
  larger: modularScale(2, baseFontSizes.base, baseFontSizes.scale),
  xlarge: modularScale(3, baseFontSizes.base, baseFontSizes.scale),
  xlarger: modularScale(4, baseFontSizes.base, baseFontSizes.scale),
}

const fontWeights = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}

export { fontFamilies, fontSizes, fontWeights };