const baseSize = {
  mobile: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1680px',
  desktopL: '2560px',
}

const devices = {
  mobile: `(min-width: ${baseSize.mobile})`,
  mobileM: `(min-width: ${baseSize.mobileM})`,
  mobileL: `(min-width: ${baseSize.mobileL})`,
  tablet: `(min-width: ${baseSize.tablet})`,
  laptop: `(min-width: ${baseSize.laptop})`,
  laptopL: `(min-width: ${baseSize.laptopL})`,
  desktop: `(min-width: ${baseSize.desktop})`,
  desktopL: `(min-width: ${baseSize.desktop})`
};

export { devices }