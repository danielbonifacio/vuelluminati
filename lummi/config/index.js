'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const { Root } = require('./dir')
module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Configurações do dev-server
    host: 'localhost', // pode ser sobrescrito por process.env.HOST
    port: 8080, // pode ser sobrescritp por process.env.PORT
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: 'cheap-module-eval-source-map',

    // Caso tenha problemas com o devtools do vue, setar iso como falso pode ajudar
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    // Template do index.html
    index: path.join(Root, 'dist/index.html'),

    assetsRoot: path.join(Root, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
