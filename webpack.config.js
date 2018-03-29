const path = require('path');
const webpack = require('webpack');
 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const ExtractPlugin = require('./webpack/extractPlugin');
const Uglify = require('./webpack/uglify');

const NODE_ENV = process.env.NODE_ENV || 'development';

const common = merge([{
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(jpg|png)$/,
          loader: 'file-loader',
          options:{
            name: 'images/[name].[ext]'
          }
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }, 
  ExtractPlugin()
]);

module.exports = function(env) {
  if(env === 'production'){
    return merge([
      common,
      Uglify()
    ]);
  }
  if(env === 'development'){
    return merge([
      {},
      common,
      devserver()
    ]);
  }
}
