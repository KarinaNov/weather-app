const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/weather-app/" : "/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/styles/styles.scss"'
      }
    }
  }
})
