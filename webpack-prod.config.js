const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client',
  output: { 
    path: path.join(__dirname, './prod/client'),
    publicPath: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
};