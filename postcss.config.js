module.exports = {
    "plugins": [
        require('postcss-import'),
        require('postcss-url'),
        require('autoprefixer')({ 
            // browserslist : ['last 100 versions']
        })
    ]
  }
  