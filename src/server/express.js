//启动一个服务器

import express from 'express';
import path from 'path';

//创建服务器
const server = express()

//配置启动路径
const stateMiddleware = express.static("dist")

//自动监听代码
const webpack = require('webpack')
const config = require('../../config/webpack.dev.js')


const compiler = webpack(config)

const webpackDevdMiddleWare = require("webpack-dev-middleware")(compiler, config.devServer)

//热更新
const webpackHot = require("webpack-hot-middleware")(compiler)


server.use(webpackDevdMiddleWare)
server.use(webpackHot)
server.use(stateMiddleware)


server.listen(8082, () => {
  console.log("server is running ...")
})