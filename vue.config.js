const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/vars";',
      },
    },
  },
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()
    ]
  },
  transpileDependencies: true
})
