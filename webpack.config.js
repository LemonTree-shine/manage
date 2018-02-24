var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');


var entre = {};
require("babel-core").transform("code", {
  plugins: ["transform-class-properties"]
});

console.log(process.argv);

module.exports = {
	entry:{index:['./src/index.js']},
	output:{
		path:__dirname+"/build",
		filename:"js/[name].[hash].js"
	},
	module:{
		rules:[{
			test:/\.css$/,
			loader:['style-loader', 'css-loader']
		},
		{
			test:/\.less$/,
			loader:['style-loader','css-loader','less-loader']
		},
		{
			test:/\.vue$/,
			loader:"vue-loader"
		},
		{
			test: /\.js$|\.jsx$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
					presets: ['es2015','react','stage-0']
			}
		}]
	},
	plugins: [
	  new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			title: 'demo',
			template: 'index.html', // 模板路径
			filename:"index.html"
		}),
		new CopyWebpackPlugin([{
			from:__dirname + '/assets',
			to:__dirname+"/build/assets"
		}]),
	],
	resolve: {
	  extensions: ['.vue','.js','.jsx', '.json', ' '],
	}
}






