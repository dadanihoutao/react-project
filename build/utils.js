const path = require('path')
const packageConfig = require('../package.json')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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

exports.cssLoaders = (options) => {
    options = options || {}
    const cssLoader = { 
        loader: 'css-loader',
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