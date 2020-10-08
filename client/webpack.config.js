const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const loaderUtils = require('loader-utils')

const options = loaderUtils.getOptions(this);

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';


module.exports = {
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:3000"
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: [{
						loader: 'svelte-loader'
					}
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
						  sassOptions: {
							includePaths: [
							  './src/theme',
							  './node_modules'
							]
						  }
						}
					  }
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),

		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
			  preset: ['default', { discardComments: { removeAll: true } }]
			},
			canPrint: true
		})
	],
	devtool: prod ? false: 'source-map'
};
