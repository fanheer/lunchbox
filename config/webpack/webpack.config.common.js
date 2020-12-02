const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('../paths')
const  MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const Mode=process.env.NODE_ENV.trim();
const devMode= Mode ==='development' ? true:false;
const tsImportPluginFactory = require('./ts-import-plugin');
module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              getCustomTransformers: tsImportPluginFactory,
              compilerOptions: {
                module: "es2015",
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
              //如果热更新没有执行的话，可以使用下面
              reloadAll: true,
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            // 如果没有options这个选项将会报错 No PostCSS Config found
            options: {
              plugins: (loader) => [
                require("autoprefixer")(), //CSS浏览器兼容
              ],
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
              //如果热更新没有执行的话，可以使用下面的reloadAll
              reloadAll: true,
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //文件名称
              name: devMode ? "[name].[ext]" : "[name]-[hash:5].min.[ext]",
              limit: 20000, // size <= 20KB
              //图片访问路径
              publicPath: devMode ? "./images/" : "./static/images",
              //图片输出位置
              outputPath: "static/images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 创建一个在内存中生成的html插件
    new HtmlWebpackPlugin({
      title: "Lunchbox Demo",

      template: paths.appHtml,
      inject: true,
    }),
    //css和js分离打包
    new MiniCssExtractPlugin({
      //生产环境打包加上hash值
      filename: devMode ? "[name].css" : "[name][hash:8].css",
      chunkFilename: "[id].css",
    }),
  ],
};