'use strict'
var path = require('path');
var webpack = require('webpack');
var vue = require('vue-loader');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProduction = function () {
    return process.env.NODE_ENV === 'production';
};

//webpck插件
var plugins = [
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    //将样式统一发布到style.css中
    new ExtractTextPlugin("style.css", {
        allChunks: true,
        disable: false
    }),
    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
        $: 'webpack-zepto'
    }),
    //这个插件的作用是给输出的文件头部添加注释信息。
    new webpack.BannerPlugin('This file is created by longjianlin')
];

var entry = ['./src/main'],
    cdnPrefix = "",
    buildPath = "/dist/",
    publishPath = cdnPrefix + buildPath;

//生产环境js压缩和图片cdn
if (isProduction()) {
    //plugins.push(new webpack.optimize.UglifyJsPlugin());
    cdnPrefix = "";
    publishPath = cdnPrefix;
}

//编译输出路径
module.exports = {
    debug: true,
    entry: entry,
    output: {
        path: __dirname + buildPath,
        filename: 'build.js',
        publicPath: publishPath
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader", "css-loader?sourceMap!cssnext-loader")
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist/,
                loader: 'babel'
            }
            , {
                test: /\.(jpg|png|gif)$/,
                loader: "file-loader?name=images/[hash].[ext]"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    vue: {
        css: ExtractTextPlugin.extract("css"),
        sass: ExtractTextPlugin.extract("css!sass-loader")
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js']
    },
    plugins: plugins,
    devtool: '#source-map'
};