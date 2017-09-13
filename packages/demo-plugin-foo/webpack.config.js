const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

const ENV = require('./env');
const PATHS = require('./paths');

const webpackConfig = {
  devtool: 'source-map',

  entry: {
    index: [
      `${PATHS.SRC}/index.js`
    ]
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: PATHS.DIST,
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
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
        exclude: [...PATHS.EXCLUDED_MODULES],
        include: [
          PATHS.SRC,
          ...PATHS.LINKED_MODULES
        ],
        use: [
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
      filename: '[name].css',
      disable: ENV === 'development'
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.NamedChunksPlugin((chunk) => {
      if (chunk.name) {
        return chunk.name;
      }

      return chunk.mapModules(m => path.relative(m.context, m.request)).join('_');
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

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      comments: false,
      mangle: false,
      beautify: false,
      sourceMap: true
    }),

    new PeerDepsExternalsPlugin()
  ]
};

module.exports = webpackConfig;
