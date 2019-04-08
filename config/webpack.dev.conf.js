const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const HOST = "localhost"
const PORT = 9999;


// 插件列表
// const OpenBrowserPluginvar = new OpenBrowserPlugin({ url: `http://${HOST}:${PORT}` });


module.exports = webpackMerge(baseConf, {
  mode: 'development',
  devtool: 'eval-source-map',   //enable srouce map
  // baseConf.plugins.push(OpenBrowserPluginvar),
  plugins:[new OpenBrowserPlugin({ url: `http://${HOST}:${PORT}` })],
  devServer:{
    contentBase:"/",
  	inline: true,
  	host: "0.0.0.0",
  	port: PORT,
  }
});
