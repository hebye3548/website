const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const url = require('url')
const publicPath = ''

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: './src/main.js',
    mock: './src/mock.js'
  },
  output: {
    path: resolve(__dirname, '../webapp/'),
    filename: options.dev ? '[name].js' : 'js/[name].js?[chunkhash]',
    chunkFilename: 'js/[id].js?[chunkhash]',
    publicPath: options.dev ? '/assets/' : publicPath
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loaders: 'vue-loader',
        options: {
          loaders: {
            'scss': 'style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loader:'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'image/[name].[hash:7].[ext]'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'font/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest','mock']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: 8010,
    proxy: {
      '/manager/': {
        //target: 'http://192.168.0.114:8080',
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    },
    historyApiFallback: {
      index: url.parse(options.dev ? '/assets/' : publicPath).pathname
    }
  },
  devtool: options.dev ? '#eval-source-map' : '#source-map'
})
