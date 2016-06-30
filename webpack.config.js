const webpack = require('webpack')
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {

  const addPlugin = (add, plugin) => add ? plugin : undefined
  const ifProd = plugin => addPlugin(env.prod, plugin)
  //const ifDev = plugin => addPlugin(env.dev, plugin)
  //const ifTest = plugin => addPlugin(env.test, plugin)
  const ifNotTest = plugin => addPlugin(!env.test, plugin)
  const removeEmpty = array => array.filter(i => !!i)

  return {
    entry: {
      vendor: './app/index.vendor.js',
      app: './app/index.bootstrap.js'
    },
    output: {
      filename: 'bundle.[name].[chunkhash].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        {test: /\.js$/, loader: 'ng-annotate!babel!eslint', exclude: /node_modules/},
        {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
        {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
        {test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/},
      ],
    },

    plugins: removeEmpty([

      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      ifProd(new webpack.optimize.DedupePlugin()),
      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })),
      ifProd(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        }
      })),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, //eslint-disable-line
          warnings: false,
        }
      })),
      ifNotTest(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      }))

    ])
  }
}
