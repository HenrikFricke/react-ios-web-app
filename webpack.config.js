'use-strict'

const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const env = process.env.NODE_ENV

const PATHS = {
  app: path.join(__dirname, 'app'),
  spec: path.join(__dirname, 'spec'),
  dist: path.join(__dirname, 'dist')
}

const config = {
  entry: {
    'react-ios-web-app': path.join(PATHS.app, 'index.jsx')
  },
  output: {
    path: PATHS.dist,
    filename: 'react-ios-web-app.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel!eslint',
        test: /\.(js|jsx)$/,
        include: [
          PATHS.app,
          PATHS.spec
        ],
      },
      {
        loader: "style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass",
        test: /\.scss|\.css$/
      },
      {
        loader: 'url?limit=8192',
        test: /\.(png|jpg|jpeg|gif|svg)$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.app, 'index.html')
    }),
    new CopyWebpackPlugin([
      { from: path.join(PATHS.app, 'img'), to: path.join(PATHS.dist, 'img') }
    ])
  ],
  sassLoader: {
    data: '@import "theme/_config.scss";',
    includePaths: [path.resolve(__dirname, './app')]
  },
  postcss: [autoprefixer],
  eslint: {
    configFile: './.eslintrc',
    fix: true
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: ["node_modules"]
  }
}

if (env == "production") {
  config.eslint.failOnError = true
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config
