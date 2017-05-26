const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js?$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.hbs?$/, exclude: /node_modules/, use: 'handlebars-loader'},
      {test: /\.css?$/, exclude: /node_modules/, use: ['style-loader', 'css-loader']}
    ]
  }
}

