const path = require('path')
import webpack from 'webpack';
// const webpack = require('webpack');
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //入口：有并且可以有多个
  entry: {
    //main: ['babel-polyfill', './src/main.js']
    // main: ['core-js/fn/promise', './src/main.js']
    main: ['./src/main.js']
  },
  //打包环境：开发&生产
  mode: "development",
  //出口，有且只能有一个
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  //本地服务器
  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true
  },
  //本地调试工具
  devtool: 'source-map',
  module: {
    rules: [
      //js loaders
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        //忽略文件夹
        exclude: /node_modules/
      },
      // css loaders
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      // html loader
      {
        test: /\.html$/,
        use: [
          // {
          //   loader: "file-loader",
          //   options: {
          //     name: "[name].html"
          //   }
          // },
          // //将我们的index.html和bundle.js进行区分
          // {
          //   loader: "extract-loader",
          // },
          {
            loader: 'html-loader',
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      //image loader
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "images/[name].[ext]"
              //name: "images/[name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}