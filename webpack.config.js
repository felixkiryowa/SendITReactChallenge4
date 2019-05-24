const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
      rules : [
        {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        } 
      ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ]

}
