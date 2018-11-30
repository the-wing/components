const path = require('path');
const formatter = require('eslint-friendly-formatter');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.js$/,
    loader: 'eslint-loader',
    options: {
      formatter,
    },
    include: path.resolve(__dirname, '../'),
  });

  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  Object.assign(defaultConfig, {
    resolve: Object.assign(defaultConfig.resolve || {}, {
      alias: Object.assign((defaultConfig.resolve && defaultConfig.resolve.alias) || {}, {
        assets: path.resolve(__dirname, '../src/assets'),
        breakpoints: path.resolve(__dirname, '../src/breakpoints'),
        containers: path.resolve(__dirname, '../src/containers'),
        theme: path.resolve(__dirname, '../src/theme.js'),
        ui: path.resolve(__dirname, '../src/ui'),
        utils: path.resolve(__dirname, '../src/utils.js'),
      }),
    }),
  });

  return defaultConfig;
};
