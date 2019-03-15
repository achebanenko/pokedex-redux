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
    // Same as: historyApiFallback: true
    historyApiFallback: {
      index: 'index.html'
    },
    contentBase: path.join(__dirname, 'public/'),
    // publicPath:
    /*
    inline: true,
    hot: true,
    */
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