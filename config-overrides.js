// @符号
const path = require('path');
const { override, addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const stylelintPlugin = new StylelintWebpackPlugin({
  context: 'src',
  configFile: path.resolve(__dirname, './.stylelintrc.js'), // 指定 stylelint 配置的文件
  files: ['**/*.less', '**/*.css'],
  failOnError: false,
  quiet: true,
  syntax: 'less',
});

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
    modifyVars: {},
  }),
  (config) => {
    config.plugins = [...config.plugins, stylelintPlugin];
    return config;
  }
);
