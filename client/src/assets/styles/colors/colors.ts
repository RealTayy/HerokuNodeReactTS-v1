const baseColors = {
  white: '#ffffff',
  jet: '#333333',
  quickSilver: '#a6a2a2',
  timberwolf: '#cfd2cd',
  platinum: '#e5e6e4',
  rocketMetallic: '#847577',
  floralWhite: '#fbfbf2',
}

const colors = {
  ...baseColors,
  background: baseColors.rocketMetallic,
  fontPrimary: baseColors.jet,
  fontSecondary: baseColors.platinum,
  primary: baseColors.quickSilver,
  secondary: baseColors.timberwolf
}

export { colors };