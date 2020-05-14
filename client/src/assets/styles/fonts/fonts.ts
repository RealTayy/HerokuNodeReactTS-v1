import { modularScale } from 'polished';

const baseFontFamilies = {
  robotoSlab: "'Roboto Slab', serif;",
  raleway: "'Raleway', sans-serif;",
}

const fontFamilies = {
  ...baseFontFamilies,
  primary: baseFontFamilies.robotoSlab,
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

export { fontFamilies, fontSizes };