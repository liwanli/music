const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');



module.exports = webpackMerge(baseConf, {
  mode: 'development',
  devtool: 'eval-source-map',   //enable srouce map
  devServer:{
    contentBase:"/",
  	inline: true,
  	host: "0.0.0.0",
  	port: 9999
  }
});