
const webpackMerge = require('webpack-merge');
// 清除文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConf = require('./webpack.base.conf')





module.exports = webpackMerge(baseConf,{
	mode: 'production',
	plugins:[
		// 删除文件 保留新文件
        new CleanWebpackPlugin()
	]
})