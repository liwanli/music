const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// css分离
// const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {
  entry: path.resolve(__dirname, "../app/main.js"),
  output: {
    filename: '[name].bundle.[hash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".json", ".vue"],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      "@": path.resolve(__dirname, "../app")
    }
  },
  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue-music',
      filename: 'index.html',
      template: path.resolve(__dirname, "../index.html")
    }),
    new VueLoaderPlugin()
  ]
};
