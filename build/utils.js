const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// 统一路径格式并且获取绝对路径
exports.resolve = (dir) => {
  return path.resolve(__dirname, dir)
}
// 判断是否是开发环境
exports.isDev = () => {
    return process.env.NODE_ENV === 'development';
}

// 打包生成文件输出路径拼接
exports.assetsPath = (_path) => {
    return path.posix.join('static', _path)
}

// 错误气泡提示
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

// 封装提取css-loader less-loader postcss-loader 等函数
exports.cssLoaders = (options) => {
    options = options || {}
    const cssLoader = { 
        loader: 'css-loader',  // 转换css
        options: {
            sourceMap: options.sourceMap
        }
    }

    function generateLoaders (loader, loaderOptions) {
        const loaders = [cssLoader, 'postcss-loader']
        if (loader) {
            loaders.push({
                loader: loader+'-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }
        if (options.extract) {
            return [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: process.env.NODE_ENV !== 'development',
                    reloadAll: true
                }
            }].concat(loaders)
        } else {
            return ['style-loader'].concat(loaders)
        }
    }

    const object = {
        css: generateLoaders(),
        less: generateLoaders('less')
    }
    const output = []
    for (let key in object) {
        const loader = object[key]
        output.push({
            test: new RegExp('\\.' + key + '$'),
            use: loader
        })
    }
    return output
}