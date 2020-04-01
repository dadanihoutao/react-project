const utils = require('./utils')

module.exports = {
    // 入口
    entry: {
      app: './src/index.js'
    },
    // 出口
    output: {
      // 输出文件名， contenthash:5 自动添加5位hash后缀
      filename: 'js/[name].[hash:5].js',
      // 输出路径
      path: utils.resolve('../dist'),
      // 打包后的资源的访问路径前缀
      publicPath: '/'
    },
    // 各种模块解析配置
    module: {}
}