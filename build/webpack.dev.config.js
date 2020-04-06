const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = webpackMerge(baseWebpackConfig, {
    // 设置构建环境为开发环境
    mode: 'development',
    devtool: 'inline-source-map',
    // 插件配置
    plugins: [
        new HtmlWebpackPlugin({
        filename: utils.resolve('../dist/index.html'), // html模板的生成路径
        template: 'index.html', // html模板文件
        })
    ],
    // 开发环境本地启动的服务配置
    devServer: {
        // open: true, // 自动打开浏览器
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true, // 热更新
        contentBase: false, // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        compress: true, // 一切服务都启用gzip 压缩：
        port: '8081', // 端口号
        publicPath: '/', // 访问资源加前缀
        proxy: {
            // 接口代理配置
            "/api": {
                secure: false,
                target: "http://www.lokiblog.com/"
            }
        }
    }
})