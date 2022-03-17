const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './index.mjs'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'webpack.js',
  },
};
