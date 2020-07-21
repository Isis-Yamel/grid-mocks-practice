const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

    entry: './src/javascipt/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'bundle.js',
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
    },

    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
            }
        },
        {
            test: /\.css$/,
            use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
            'file-loader',
            ],
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "index.html", excludeChunks: ['dev-helper']}),
        new MiniCssExtractPlugin({excludeChunks: ['dev-helper']})
    ],

    mode: 'development'
};