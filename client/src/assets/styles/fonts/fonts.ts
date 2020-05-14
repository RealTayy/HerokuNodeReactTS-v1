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
  base: 1,
  suffix: 'rem',
  scale: 1.33333,
  negScale: 1 / 1.333333
}

const fontSizes = {
  xsmaller: baseFontSizes.base * Math.pow(baseFontSizes.negScale, 4) + baseFontSizes.suffix,
  xsmall: baseFontSizes.base * Math.pow(baseFontSizes.negScale, 3) + baseFontSizes.suffix,
  smaller: baseFontSizes.base * Math.pow(baseFontSizes.negScale, 2) + baseFontSizes.suffix,
  small: baseFontSizes.base * Math.pow(baseFontSizes.negScale, 1) + baseFontSizes.suffix,
  normal: baseFontSizes.base + baseFontSizes.suffix,
  large: baseFontSizes.base * Math.pow(baseFontSizes.scale, 1) + baseFontSizes.suffix,
  larger: baseFontSizes.base * Math.pow(baseFontSizes.scale, 2) + baseFontSizes.suffix,
  xlarge: baseFontSizes.base * Math.pow(baseFontSizes.scale, 3) + baseFontSizes.suffix,
  xlarger: baseFontSizes.base * Math.pow(baseFontSizes.scale, 4) + baseFontSizes.suffix,
}

export { fontFamilies, fontSizes };