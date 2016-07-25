var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: path.resolve(__dirname, 'src/entry.js'),
	output:{
		path: path.resolve(__dirname, "build"),
		filename: 'bundle.js'
	},
	devServer:{
		hot: true,
		port:8080,
		inline: true,
		stats:{color: true},
	},
	resolve:{
		extension:['','.js','.jsx','.css','.json'],
	}
}