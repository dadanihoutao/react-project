const path = require('path');
const webpack = require('webpack')
const utils = require('./utils')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const NODE_ENV_VALUE = process.env.NODE_ENV;

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: utils.resolve('../dist'),
		publicPath: '/',
        filename: utils.assetsPath('js/[name].[hash:7].js') ,
        chunkFilename: utils.assetsPath('js/[name].[chunkhash:7].js')
    },
    externals: {
        // react: 'react'
    },
	module: {
		rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                include: /src/,
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    emitWarning: true
                }
            },
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 1000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 1000,
                  name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 1000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json' ],
		alias: {
			'@': path.join(__dirname, '..', 'src')
		}
	},
	plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                APP_ENV: JSON.stringify(process.argv[2])
            }
        }),
		new CopyWebpackPlugin([
			{
				from: utils.resolve('../static'),
				to: 'static',
				ignore: [ '.*' ]
			}
        ]),
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: utils.assetsPath('css/[name].[hash:7].css'),
            chunkFilename: utils.assetsPath('css/[id].[chunkhash:7].css')
        })
	]
}
