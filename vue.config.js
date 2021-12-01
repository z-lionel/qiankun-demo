const target = 'http://localhost:3322'
const { name } = require('./package');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    open: true, 
    host: '0.0.0.0',
    port: 6052,
    https: false,
    hotOnly: false, 
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      // 配置跨域
      '/api': {
        target,
        ws: false,
        changOrigin: true
      },
    },
  },
   // 自定义webpack配置
   configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  // configureWebpack: config => {
  //   return {
  //     output: {
  //       // 把子应用打包成 umd 库格式
  //       library: `${name}-[name]`,
  //       libraryTarget: 'umd',
  //       jsonpFunction: `webpackJsonp_${name}`,
  //     },
  //   }
  // },
}
