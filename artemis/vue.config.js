// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
module.exports = {
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    config.devServer.set('headers',{
        "Access-Control-Allow-Origin": "*",
      })

    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    
    config.output.filename(`[name].js`)
    // if it's not development mode, exclude it from bundle and rely on the host
    if (process.env.NODE_ENV != 'development') {
      config.externals(['vue', 'vue-router'])
    }
  },
  filenameHashing: false,
}
