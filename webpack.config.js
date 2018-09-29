const webpack = require('webpack');
const path = require('path');
const moment = require('moment');

const pkg = require('./package.json');

module.exports = {
  entry: {
    index: path.join(__dirname, 'index.ts'),
    'index.min': path.join(__dirname, 'index.ts'),
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].user.js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.coffee', '.js', '.ts'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin(
      (() => {
        const result = { 'process.env.NODE_ENV': '"development"' };
        for (const key in process.env) {
          if (process.env.hasOwnProperty(key)) {
            result['process.env.' + key] = JSON.stringify(process.env[key]);
          }
        }
        return result;
      })()
    ),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.BannerPlugin({
      banner: `// ==UserScript==
// @name              ${pkg.name}
// @author            ${pkg.author}
// @description       ${pkg.description}
// @version           ${pkg.version}
// @update            ${moment().format('YYYY-MM-DD HH:mm:ss')}
// @grant             GM_xmlhttpRequest
// @include           https://www.wanikani.com/*
// @run-at            document-start
// @namespace         https://greasyfork.org/en/users/56591-normful
// @license           The MIT License (MIT); http://opensource.org/licenses/MIT
// ==/UserScript==

`,
      entryOnly: true,
      raw: true,
    }),
  ],
};
