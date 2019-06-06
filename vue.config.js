const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  css: {
    sourceMap: true
  },

  baseUrl: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: "wpplugin-step-by-step",
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  filenameHashing: false,
  parallel: undefined,
  configureWebpack: {
    plugins: [
      new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      title: 'Création d\'une Extension WordPress Step by Step'
    }),
    ]
  }
};
