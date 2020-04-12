const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = webpackMerge(baseWebpackConfig, {
    // 设置构建环境为开发环境
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: utils.cssLoaders({extract: false, sourceMap: true})
    },
    // 插件配置
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: utils.resolve('../dist/index.html'), // html模板的生成路径
            template: 'index.html', // html模板文件
        }),
        // 本地服务器运行编译成功，终端给出的绿色提示效果
        new FriendlyErrorsWebpackPlugin()
    ],
    // 开发环境本地启动的服务配置
    devServer: {
        clientLogLevel: 'warning', // 只有编译警告的时候才会在浏览器控制台打印log
        // open: true, // 自动打开浏览器
        host: HOST || '0.0.0.0',
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true, // 热更新
        contentBase: false, // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        compress: true, // 一切服务都启用gzip 压缩：
        port: PORT || '8081', // 端口号
        publicPath: '/', // 访问资源加前缀
        quiet: true, // 编译信息不被写入到控制台
        // overlay: true, // 编译错误或者警告，全屏覆盖提示
        proxy: {
            // 接口代理配置
            // "/api": {
            //     secure: false,
            //     target: "http://www.lokiblog.com/"
            // }
        }
    }
})

// 服务器启动，终端窗口提示
module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = PORT || devWebpackConfig.devServer.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            process.env.PORT = port
            devWebpackConfig.devServer.port = port
            devWebpackConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`]
                },
                onErrors: utils.createNotifierCallback()
            }))
            resolve(devWebpackConfig)
        }
    })
})
