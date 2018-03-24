const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'svg-react-loader'
      },
      {
        test: /\.(jpe?g|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000,
              name: '[name].[ext]'
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[hash].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
}
