// @符号
const path = require('path');
const { override, addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {  },
  }),
  (config) => {
    return config
  }
)