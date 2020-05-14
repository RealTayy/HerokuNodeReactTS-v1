const {
  override,
  addDecoratorsLegacy,
  disableEsLint
} = require("customize-cra");

const rewireStyledComponents = require('react-app-rewire-styled-components');

const addBabelPluginStyledComponents = () => (config, e) => {
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
