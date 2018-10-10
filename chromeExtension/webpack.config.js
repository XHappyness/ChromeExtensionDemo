
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin'); //复制文件的插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    devtool: '#cheap-module-eval-source-map',
    entry: {
        "background/background": './background/background.ts',
        'contentScript/main': './contentScript/main.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('css-loader', 'style-loader')  // 单独打包出CSS，这里配置注意下
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './manifest.json',
                to: 'manifest.json',
                toType: 'file'
            },
            {
                from: './popup.html',
                to: 'popup.html',
                toType: 'file'
            },
            {
                from: './icon.png',
                to: 'icon.png',
                toType: 'file'
            }
        ]),
        new ExtractTextPlugin("[name].css")
    ]
};
module.exports = config;