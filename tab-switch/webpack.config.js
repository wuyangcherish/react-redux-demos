var webpack = require('webpack');

var path = require('path');

module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.jsx'
  ],
  output:{
    path: path.join(__dirname, 'dist'),
    filename:'bundle.js',
    publicPath:'/static/'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders:[
      {test:/\.js[x]?$/, loaders:['react-hot', 'babel-loader'],exclude:/node_modules/},
      {test:/\.css$/, loaders:'style!css'}
    ]
  },
  resolve:{
    extensions:['','.js','.jsx','.json','css']
  },
  devtool:'cheap-module-source-map'
}