const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build'
  },
  devtool: 'source-map',
  devServer: {
    port: 4000,
    contentBase: path.join(__dirname, 'public'),
    proxy: {
      '/api': 'http://localhost:3000'
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}