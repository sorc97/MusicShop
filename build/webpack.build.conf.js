const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    publicPath: '/MusicShop/',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin()
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});