const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title : 'Live Reload - Webpack',
            template : './index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.(s(a|c)ss)$/,
            use: ['style-loader','css-loader', 'sass-loader']
        }],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
        compress: false,
        port: 9000,
        hot: true,
    },
};