const merge = require('webpack-merge');

const CssExtractPlugin = require('mini-css-extract-plugin');
const CssExtractLoader = CssExtractPlugin.loader;

const DotenvPlugin = require('dotenv-webpack');

const common = require('../webpack.config');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    CssExtractLoader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    CssExtractLoader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new DotenvPlugin(),
    ],
});
