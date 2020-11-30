const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('../paths')

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lunchbox Demo',
    
      template: paths.appHtml,
      inject: true,
    }),
  ],
}