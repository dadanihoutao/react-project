const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpackConfig = webpackMerge(baseWebpackConfig, {
    performance: {
        hints: false
    },
    mode: 'production',
    devtool: 'none',
    module: {
        rules: utils.cssLoaders({extract: true, sourceMap: false})
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: utils.resolve('../dist/index.html'),
            template: 'index.html',
            inject: true,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        unused: true,
                        drop_debugger: true,
                        drop_console: true, 
                    },
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: { 
                    discardComments: { removeAll: true }
                } 
            })
        ],
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 5,
            automaticNameDelimiter: '~',
            name:true,
            cacheGroups: {
                antdui: {
                    priority: 2,  
                    test: /[\\/]node_modules[\\/](antd)[\\/]/,
                },
                basic: {
                    priority: 3, 
                    test: /[\\/]node_modules[\\/](moment|react|react-dom|react-router|react-router-dom|mobx|mobx-react|axios)[\\/]/,
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk:{
            name:'manifest'
        }
    }
})
if (process.env.npm_config_report) {
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig