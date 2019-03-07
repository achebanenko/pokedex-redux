const path = require('path'); 
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  entry: {
    bundle: './index.js',
  },
  output: {
    //filename: isDevelopment ? '[name].js' : '[name]-[hash].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['env', { targets: { browser: ['last 2 versions'] } }],
            'react',
            'stage-2',
          ],
        },
      },
    ],
  },
};

module.exports = config;