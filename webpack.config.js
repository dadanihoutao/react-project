const path = require('path')

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
    path: resolve('./dist'),
    // 打包后的资源的访问路径前缀
    publicPath: '/'
  },
  // 各种模块解析配置
  module: {},
  // 插件配置
  plugins: [],
  // 开发环境本地启动的服务配置
  devServer: {}
}