var path = require('path')
var webpack = require('webpack')
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin
var SplitByPathPlugin = require('webpack-split-by-path')

var options = {
  atl: {
    fork: true,
    doTypeCheck: true,
    skipDeclarationFilesCheck: true,
    useBabel: false,
    useCache: false,
    tsconfig: path.join(__dirname, 'tsconfig.json')
  }
}

module.exports = {
  entry: {
    index: './client-src/index.tsx'
  },

  resolve: {
    root: path.join(__dirname, "node_modules"),
    fallback: path.join(__dirname, "node_modules"),
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },

  output: {
    path: './public/scripts',
    filename: '[name].js',
    pathinfo: true
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader?compiler=typescript'
                + (options.atl.fork ? '&+forkChecker' : '')
                + (options.atl.doTypeCheck ? '' : '&-doTypeCheck')
                + (options.atl.useBabel ? '&+useBabel' : '')
                + (options.atl.useCache ? '&+useCache' : '')
                + (options.atl.skipDeclarationFilesCheck ? '&+skipDeclarationFilesCheck' : '')
                + (options.atl.tsconfig ? '&tsconfig=' + options.atl.tsconfig : '')
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },

  plugins: [
    new ForkCheckerPlugin(),
    new SplitByPathPlugin([
      {
        name: 'vendor',
        path: [
          path.join(__dirname, 'node_modules')
        ]
      }
    ])
  ]
}
