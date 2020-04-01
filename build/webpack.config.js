const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 设置构建环境为开发环境
  mode: 'development',
  // 入口
  entry: {
    app: './src/index.js'
  },
  // 出口
  output: {
    // 输出文件名， contenthash:5 自动添加5位hash后缀
    filename: 'js/[name].[contenthash:5].js',
    // 输出路径
    path: resolve('../dist'),
    // 打包后的资源的访问路径前缀
    publicPath: '/'
  },
  // 各种模块解析配置
  module: {},
  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('../dist/index.html'), // html模板的生成路径
      template: 'index.html', // html模板文件
      // inject: true, // true：默认值，script标签位于html文件的 body 底部
      // hash: true, // 在打包的资源插入html后会加上hash
      minify: { // html 文件进行压缩
        removeComments: true,               //去注释
        collapseWhitespace: true,           //压缩空格
        // removeAttributeQuotes: true         //去除属性 标签的 引号  例如 <p id="test" /> 输出 <p id=test/>
      }
    })
  ],
  // 开发环境本地启动的服务配置
  devServer: {}
}