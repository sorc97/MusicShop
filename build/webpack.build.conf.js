const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});