const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  // 插件配置
  plugins: [
    // 打包前清理dist文件插件,不用在实例中传入路径参数，默认清理dist 文件夹
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: utils.resolve('../dist/index.html'), // html模板的生成路径
      template: 'index.html', // html模板文件
      inject: true, // true：默认值，script标签位于html文件的 body 底部
      hash: true, // 在打包的资源插入html后会加上hash
      minify: { // html 文件进行压缩
        removeComments: true,               //去注释
        collapseWhitespace: true,           //压缩空格
        removeAttributeQuotes: true         //去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>
      }
    })
  ]
})