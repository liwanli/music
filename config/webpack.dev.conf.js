const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = webpackMerge(baseConf, {
  mode: 'development',
  devtool: 'eval-source-map',   //enable srouce map
  plugins:[
	new OpenBrowserPlugin({ url: 'http://localhost:9999' })
  ],
  devServer:{
    contentBase:"/",
  	inline: true,
  	host: "0.0.0.0",
  	port: 9999,
  }
});