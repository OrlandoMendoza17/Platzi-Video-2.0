const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'source-map',
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 9000,
  },
  resolve:{
    extensions: ['.js', '.jsx']
  },
  module:{
    rules:[
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.s?css$/i,
        use:[
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins:[
    // new MiniCssExtractPlugin({
    //   filename: '[name].css'
    // }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ]
}