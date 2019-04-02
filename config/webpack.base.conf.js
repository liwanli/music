const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// css分离
// const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: path.resolve(__dirname, "../src/main.js"),
    output: {
        filename: '[name].bundle.[hash:8].js'
    },
    resolve:{
        extensions: [".js", ".json"],
        alias:{
            vue$: 'vue/dist/vue.esm.js',
            "@": path.join(__dirname, "src")
        }
    },
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use: { loader: "babel-loader"},
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vue-music',
            filename: 'index.html',
            template: path.resolve(__dirname, "../index.html")
        }),
    ]
};