// webpack.config.js
// 压缩插件，压缩ES6的语法不会报错，uglifyjs会报错(3.0版本支持)
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "none",
    entry: {
        'large-number': './src/index.js',
        'large-number.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'largeNumber', // 指定库的名称，及库的全局变量
        libraryTarget: 'umd', // 支持库引入的方式
        libraryExport: 'default'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                include: /\.min\.js$/
            })
        ]
    }
};
