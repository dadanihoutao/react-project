const path = require('path')

// 统一路径格式并且获取绝对路径
exports.resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

exports.isDev = () => {
    return process.env.NODE_ENV === 'development';
}

exports.assetsPath = (_path) => {
    return path.posix.join('static', _path)
}

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier')

    return (severity, errors) => {
      if (severity !== 'error') return
  
      const error = errors[0]
      const filename = error.file && error.file.split('!').pop()
  
      notifier.notify({
        title: packageConfig.name,
        message: severity + ': ' + error.name,
        subtitle: filename || '',
        icon: path.join(__dirname, 'logo.png')
      })
    }
}