const path = require('path');
const utils = require('./utils');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	// 入口
	entry: {
		app: './src/index.js'
	},
	// 出口
	output: {
		// 输出文件名， contenthash:5 自动添加5位hash后缀
        filename: utils.assetsPath("js/[name].[hash:7].js") ,
        chunkFilename: utils.assetsPath("js/[name].[chunkhash:7].js"),
		// 输出路径
		path: utils.resolve('../dist'),
		// 打包后的资源的访问路径前缀
		publicPath: '/'
	},
	// 各种模块解析配置
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
                    // { loader: 'style-loader' },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: utils.isDev(), // 开发的时候，修改css热更新，但是试了下不起作用
                            reloadAll: true,
                        }
                    },
                    { 
                        loader: 'css-loader',
                        options: {importLoaders: 1}
                    } 
                ]
			},
			{
				test: /\.less$/,
				use: [
                    { 
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: utils.isDev(), // 开发的时候，修改css热更新，但是试了下不起作用
                            reloadAll: true
                        }
                    },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
					name: 'static/img/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
					name: 'static/fonts/[name].[hash:7].[ext]'
				}
			}
		]
	},
	resolve: {
		// 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
		extensions: [ '.js', '.json' ],
		alias: {
			'@': path.join(__dirname, '..', 'src') // 在项目中使用@符号代替src路径，导入文件路径更方便
		}
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: utils.resolve('../static'), // 从哪个目录copy
				to: 'static', // copy到那个目录
				ignore: [ '.*' ]
			}
        ]),
        new MiniCssExtractPlugin({
            ignoreOrder: true, // 对于通过使用范围界定或命名约定来缓解CSS排序的项目，可以通过将插件的ignoreOrder标志设置为true来禁用CSS排序警告。
            filename: utils.assetsPath('css/[name].[hash:7].css'),
            chunkFilename: utils.assetsPath('css/[id].[chunkhash:7].css')
        })
	]
};
