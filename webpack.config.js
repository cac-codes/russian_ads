const path = require('path');
const glob = require('glob');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';

  return {
    optimization: {
      minimizer: [
        new TerserPlugin({ cache: true, parallel: true, sourceMap: devMode }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    entry: {
      'adsWithState': glob.sync('./vendor/**/*.js').concat(['./js/adsWithState.js']),
      'app': glob.sync('./vendor/**/*.js').concat(['./js/app.js']),
      'advertarray': glob.sync('./vendor/**/*.js').concat(['./js/advertarray.js']),
      'allAdsUSE': glob.sync('./vendor/**/*.js').concat(['./js/allAdsUSA.js']),
      'allAdsWithState': glob.sync('./vendor/**/*.js').concat(['./js/allAdsWithState.js']),
      'apiFilter': glob.sync('./vendor/**/*.js').concat(['./js/apiFilter.js']),
      'chart': glob.sync('./vendor/**/*.js').concat(['./js/chart.js']),
      'coordinates': glob.sync('./vendor/**/*.js').concat(['./js/coordinates.js']),
      'counter': glob.sync('./vendor/**/*.js').concat(['./js/counter.js']),
      'data': glob.sync('./vendor/**/*.js').concat(['./js/data.js']),
      'displayAdsByTargetGroup': glob.sync('./vendor/**/*.js').concat(['./js/displayAdsByTargetGroup.js']),
      'header': glob.sync('./vendor/**/*.js').concat(['./js/header.js']),
      'peter-advert': glob.sync('./vendor/**/*.js').concat(['./js/peter-advert.js']),
      'svg-map': glob.sync('./vendor/**/*.js').concat(['./js/svg-map.js']),
      'targetGroups': glob.sync('./vendor/**/*.js').concat(['./js/targetGroups.js']),
      'totals': glob.sync('./vendor/**/*.js').concat(['./js/totals.js'])
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../priv/static/js'),
      publicPath: '/js/'
    },
    devtool: devMode ? 'eval-cheap-module-source-map' : undefined,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.[s]?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: "file-loader?name=/images/[name].[ext]"
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '../css/app.css' }),
      new CopyWebpackPlugin([{ from: 'static/', to: '../' }])
    ]
    .concat(devMode ? [new HardSourceWebpackPlugin()] : [])
  }
};
