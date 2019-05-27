const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


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
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.less$/,
          loaders: [
            'style=loader', 'css-loader', 'less-loader',
          ],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader?classPrefix',
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      systemvars: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },

}
