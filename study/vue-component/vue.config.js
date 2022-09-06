const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,

  },
  lintOnSave: false
})
