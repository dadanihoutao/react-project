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
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: utils.cssLoaders({extract: false, sourceMap: true})
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: utils.resolve('../dist/index.html'),
            template: 'index.html',
        }),
        new FriendlyErrorsWebpackPlugin()
    ],
    devServer: {
        clientLogLevel: 'warning',
        // open: true,
        host: HOST || '0.0.0.0',
        historyApiFallback: true,
        hot: true,
        contentBase: false,
        compress: true,
        port: PORT || '8081',
        publicPath: '/',
        quiet: true,
        overlay: true,
        proxy: {
            // "/api": {
            //     secure: false,
            //     target: "http://www.baidu.com/"
            // }
        }
    }
})

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
