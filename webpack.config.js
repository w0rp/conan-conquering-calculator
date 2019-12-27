const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/web.ts',
  output: {
    filename: './ccc.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader'},
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      sourceMap: true,
      extractComments: false,
      terserOptions: {
        compress: {
          ecma: 6,
        },
        output: {
          comments: false,
        }
      },
    })],
  },
}
