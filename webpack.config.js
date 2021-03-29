const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true,
  },
  module:{
    rules:[
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ]
}