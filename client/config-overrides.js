const {
  override,
  addDecoratorsLegacy,
  disableEsLint
} = require("customize-cra");

const rewireStyledComponents = require('react-app-rewire-styled-components');

const addBabelPluginStyledComponents = () => (config, e) => {
  console.log("BABEL_ENV:", process.env.BABEL_ENV);
  console.log("WEBPACK_DEV_SERVER:", process.env.WEBPACK_DEV_SERVER);
  return rewireStyledComponents(config, null, {
    "displayName": true,
    "fileName": false
  })
}

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  addBabelPluginStyledComponents()
);
