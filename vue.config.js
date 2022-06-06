const path = require('path')

const resolve = dir => {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
	outputDir:"docs", //打包后的项目目录名称
	productionSourceMap: false,
}