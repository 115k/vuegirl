const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/base.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config
      .resolve
      .alias
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('config', resolve('config'))
  },
  //反向代理
  devServer: {
    // 环境配置
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://10.100.162.210:7001',
        pathRewrite: {
          '^/api': ''
        },
        onProxyRes: function (proxyRes) {
          proxyRes.headers['Access-Control-Allow-Credentials'] = 'true'
          proxyRes.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Authorization'
          proxyRes.headers['Access-Control-Allow-Origin'] = '*'
          proxyRes.headers['Content-Type'] = 'application/json; charset=utf-8'
        },
        onProxyReq: function (proxyReq) {
          proxyReq.setHeader('Accept', 'application/json, text/plain, */*')
        }
      }
    }
  }
}