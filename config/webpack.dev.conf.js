const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const HOST = "localhost"
const PORT = 9999;


// 插件列表
// const OpenBrowserPluginvar = new OpenBrowserPlugin({ url: `http://${HOST}:${PORT}` });

module.exports = webpackMerge(baseConf, {
  mode: 'development',
  devtool: 'eval-source-map', //enable srouce map
  // baseConf.plugins.push(OpenBrowserPluginvar),
  plugins: [new OpenBrowserPlugin({ url: `http://${HOST}:${PORT}` })],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    host: "0.0.0.0",
    port: PORT,
    compress: true, //服务都启用gzip 压缩
    inline: true,
    hot: true,
    // quit: true,//除了初始启动信息之外的任何内容都不会被打印到控制台
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /.*/, to: path.posix.join(__dirname, './index.html') },
    //   ],
    // },
    // proxy: {
    //   "/":{
    //     // target:''
    //   }
    // }
  }
});
