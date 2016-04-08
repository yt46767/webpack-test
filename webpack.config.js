var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var JS_PATH = path.resolve(ROOT_PATH, 'src/js'); //这句是处理js文件
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var CSS_PATH = path.resolve(ROOT_PATH, 'src/css');

var APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: JS_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js' //第一个合成的js文件
  },
  //[插件html-webpack-plugin]添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: '第一个自动生成的html' //第一个生成的html文件
    })
  ],
  //[插件webpack-dev-server]
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  //[插件]
  module: {
    loaders: [
      { //[css-loader]css以require(...)引入
        test: /\.css$/,
        loaders: ['style', 'css'], //loaders是一个数组，包含要处理这些程序的loaders，这里我们用了css和style，注意loaders的处理顺序是从右到左的，这里就是先运行css-loader然后是style-loader.
        include: CSS_PATH
      },
      { //[url-loader]处理图片
        test: /\.(png|jpg)$/,
        loader: 'url?limit=4000'
        //注意后面那个limit的参数，当你图片大小小于4M这个限制的时候，会自动启用base64编码图片
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
