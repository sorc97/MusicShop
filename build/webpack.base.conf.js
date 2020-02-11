const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constants
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  public: path.join(__dirname, '../public'),
  assets: 'assets/'
}

module.exports = {
  entry: PATHS.src,
  output: {
    path: PATHS.dist,
    filename: `${PATHS.assets}js/[name].[chunkhash].js`,
  },
  externals: {  // External variables
    paths: PATHS
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { sourceMap: true },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } }
          },
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/style.[contenthash].css`
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.public}/index.html`,
      filename: 'index.html'
    })
  ]
}