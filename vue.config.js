const titulo = require('./src/config/titulo')
module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "sass:color";
          @use "sass:math";
          @import "@/styles/_variables.sass";
        `,
        implementation: require('sass'),
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = titulo
      return args
    })
  },
}
