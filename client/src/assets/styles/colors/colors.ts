// https://coolors.co/ffffff-333333-141617-aeaeae-56626b-1f2428-303840
const baseColors = {
  white: '#ffffff',
  jet: '#333333',
  eerieBlack: '#141617',
  silverChalice: '#AEAEAE',
  blackCoral: '#56626B',
  charlestonGreen: '#1F2428',
  gunmetal: '#303840'
}

const colors = {
  ...baseColors,
  background: baseColors.eerieBlack,
  fontPrimary: baseColors.silverChalice,
  fontSecondary: baseColors.blackCoral,
  primary: baseColors.gunmetal,
  secondary: baseColors.charlestonGreen
}

export { colors };