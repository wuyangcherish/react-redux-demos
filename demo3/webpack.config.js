var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	output:{
		filename: 'bundle.js'
	},
	devServer:{
		hot: true,
		port:8080,
		inline: true,
		stats:{color: true},
		contentBase:""
	},
	resolve:{
		extension:['','.js','.jsx','.css','.json'],
	},
	module:{
		loaders:[
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
		]
	},
	devtool: 'cheap-module-eval-source-map',
}