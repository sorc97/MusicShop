const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 4000,
    contentBase: baseWebpackConfig.externals.paths.dist,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})