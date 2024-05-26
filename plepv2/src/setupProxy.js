const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://maps-data.p.rapidapi.com/nearby.php',
      changeOrigin: true
    })
  )
}
