const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'source-map',

  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
    theme: path.resolve(__dirname, '../src/theme.js'),
    breakpoints: path.resolve(__dirname, '../src/breakpoints.js'),
    fonts: path.resolve(__dirname, '../src/style/fonts.scss'),
    normalize: path.resolve(__dirname, '../src/style/normalize.scss'),
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    library: 'Components',
    libraryTarget: 'umd',
    publicPath: '/',
    umdNamedDefine: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env', 'babel-preset-react'],
          plugins: ['transform-class-properties', 'transform-object-rest-spread'],
        },
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|otf|webp|ttf|woff|woff2|svg)(\?.*)?$/,
        include: path.resolve(__dirname, '../src/assets/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|svg)(\?.*)?$/,
        include: path.resolve(__dirname, '../src/assets/img'),
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/img/[name].[hash:8].[ext]',
              limit: 8000,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyWebpackPlugin([{ from: 'src/assets/img', to: 'assets/img' }]),
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['node_modules'],
    alias: {
      assets: path.resolve(__dirname, '../src/assets'),
      breakpoints: path.resolve(__dirname, '../src/breakpoints'),
      containers: path.resolve(__dirname, '../src/containers'),
      theme: path.resolve(__dirname, '../src/theme.js'),
      ui: path.resolve(__dirname, '../src/ui'),
      utils: path.resolve(__dirname, '../src/utils.js'),
    },
  },

  externals: [nodeExternals()],
};
