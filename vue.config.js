module.exports = {
  devServer: {
    proxy: {
      '^/v1': {
        target: 'https://arendauy1.herokuapp.ru/',
        changeOrigin: true,
        pathRewrite: {'^/v1': '/v1'},
        log: 'debug'
      }
    }
  }
}
