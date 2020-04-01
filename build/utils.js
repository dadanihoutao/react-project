const path = require('path')

// 统一路径格式并且获取绝对路径
function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  resolve: resolve
}