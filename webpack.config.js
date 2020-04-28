const path = require('path');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  entry: './src/javascipt/index.js',


  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  mode: 'development'
};