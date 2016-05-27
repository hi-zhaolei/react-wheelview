/**
* @Author: zhao lei <leozhao>
* @Date:   2016-05-27T15:29:07+08:00
* @Email:  leozhao.go@gmail.com
* @Last modified by:   leozhao
* @Last modified time: 2016-05-27T17:53:51+08:00
*/



var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    index: './src/index',
    vendors: ['react']
  },
  output: {
    path: path.resolve('output'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.less'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: path.resolve('src'),
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015'
          ]
        }
      },
      {
        test: /\.less$/,
        loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]!less'
      }
    ],
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendors', 'common.js', Infinity)
    ]
  }
}
