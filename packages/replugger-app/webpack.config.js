const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = require('./env');
const PATHS = require('./paths');

const DEFAULT_DEV_SERVER_HOST = '0.0.0.0';
const DEFAULT_DEV_SERVER_PORT = 3000;

const DEV_SERVER_HOST = process.env.HOST || DEFAULT_DEV_SERVER_HOST;
const DEV_SERVER_PORT = process.env.PORT || DEFAULT_DEV_SERVER_PORT;

const webpackConfig = {
  devtool: 'cheap-module-source-map',

  entry: {
    app: [
      `${PATHS.SRC}/index.jsx`
    ],

    vendor: [
      'react', 'react-dom', 'react-router', 'react-router-dom', 'react-router-config'
    ]
  },

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: PATHS.DIST
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      PATHS.SRC,
      PATHS.MODULES
    ],
    alias: {
      components: path.resolve(PATHS.SRC, 'components'),
      constants: path.resolve(PATHS.SRC, 'constants'),
      containers: path.resolve(PATHS.SRC, 'containers'),
      decorators: path.resolve(PATHS.SRC, 'decorators'),
      helpers: path.resolve(PATHS.SRC, 'helpers'),
      pages: path.resolve(PATHS.SRC, 'pages'),
      services: path.resolve(PATHS.SRC, 'services')
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: PATHS.SRC
      },

      {
        test: /\.(jsx|less)?$/,
        loader: 'source-map-loader',
        enforce: 'pre',
        include: PATHS.SRC
      },

      {
        exclude: [
          /\.(html|ejs)$/,
          /\.(js|jsx)$/,
          /\.(css|less)$/,
          /\.json$/,
          /\.svg$/,
          /\.(ttf|eot|woff2?)$/,
          /\.(png|jpe?g|gif)$/
        ],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }]
      },

      {
        test: /\.jsx?$/,
        include: PATHS.SRC,
        use: [
          {
            loader: 'react-hot-loader/webpack'
          },

          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                camelCase: true
              }
            }
          ]
        })
      },

      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                camelCase: true,
                modules: true
              }
            },
            {
              loader: 'less-loader',
              options: {
                strictMath: true,
                sourceMap: true,
                modules: true
              }
            }
          ]
        })
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: '[hash:8].[ext]'
          }
        }]
      },

      {
        test: /\.(ttf|eot|woff2?)$/,
        use: 'file-loader'
      },

      {
        test: /atlassian-icons\.svg$/,
        use: 'file-loader'
      },

      {
        test: /\.svg$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: '[hash:8].[ext]'
          }
        }]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV)
      },
      'process.versions': {
        node: JSON.stringify(process.versions.node)
      }
    }),

    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: ENV === 'development'
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.NamedChunksPlugin((chunk) => {
      if (chunk.name) {
        return chunk.name;
      }

      return chunk.mapModules(m => path.relative(m.context, m.request)).join('_');
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),

    {
      apply(compiler) {
        compiler.plugin('compilation', (compilation) => {
          compilation.plugin('before-module-ids', (modules) => {
            modules.forEach((module) => {
              if (module.id !== null) {
                return;
              }

              /* eslint-disable no-param-reassign */
              module.id = module.identifier();
              /* eslint-enabled no-param-reassign */
            });
          });
        });
      }
    },

    new LodashModuleReplacementPlugin()
  ]
};

module.exports = webpackConfig;

if (ENV === 'development') {
  webpackConfig.entry.app.unshift(
    'react-hot-loader/patch',
    require.resolve('react-dev-utils/webpackHotDevClient')
  );

  webpackConfig.devServer = {
    contentBase: PATHS.DIST,
    compress: true,
    host: DEV_SERVER_HOST,
    port: DEV_SERVER_PORT,
    historyApiFallback: true,
    inline: true,
    hot: true
  };

  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${PATHS.SRC}/index.ejs`,
      title: 'Replugger App',
      appMountId: 'root',
      xhtml: true,
      mobile: true,
      inject: false,
      chunks: ['runtime', 'vendor', 'app'],
      minify: {
        useShortDoctype: true,
        keepClosingSlash: true,
        collapseWhitespace: true,
        preserveLineBreaks: true
      }
    })
  );

  Object.assign(webpackConfig.output, {
    filename: '[name].[hash].js'
  });

  webpackConfig.devtool = 'cheap-module-source-map';
} else {
  webpackConfig.devtool = 'source-map';
}

module.exports = webpackConfig
