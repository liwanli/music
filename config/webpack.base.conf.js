const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// css分离
// const ExtractTextPlugin = require("extract-text-webpack-plugin");




module.exports = {
    entry: path.resolve(__dirname, "../app/main.js"),
    output: {
        filename: '[name].bundle.[hash:8].js'
    },
    resolve:{
        extensions: [".js", ".json", ".vue"],
        alias:{
            vue$: 'vue/dist/vue.esm.js',
            "@": path.resolve(__dirname, "app")
        }
    },
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },{
                test:/\.vue$/,
                use:["vue-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                  ]
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