const path = require('path')

// 统一路径格式并且获取绝对路径
function resolve (dir) {
  return path.resolve(__dirname, dir)
}

function isDev (){
    return process.env.NODE_ENV === 'development';
}

function assetsPath (_path) {
    return path.posix.join('static', _path)
}

module.exports = {
  resolve: resolve,
  isDev: isDev,
  assetsPath: assetsPath
}