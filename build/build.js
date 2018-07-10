'use strict'
require('./check-versions')()
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const Env = __dirname + '\\..\\src\\core\\config\\env.json'
let bkp, prod = ''

function readEnv () {
  return new Promise(function (resolve, reject) {
    try {
      fs.readFile(Env, (err, content) => {
        resolve(JSON.parse(content))
      })
    } catch (err) {
      reject(err)
    }
  })
}

readEnv()
.then(res => {
  bkp, prod = Object.assign({}, res)
  prod.enviroment = 'prod'
})
.catch( err => console.log("Houve um erro ao compilar: " + err) )

function build () {
  return new Promise(function(resolve, reject) {
    fs.writeFile(Env, JSON.stringify(prod, null, 2), function (err) {
      if (err) {
        return console.log("Erro ao salvar aquivo.")
      }
      process.env.NODE_ENV = 'production'
  
      const spinner = ora('Buildando para produção...')
      spinner.start()
      
      rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
        if (err) throw err
        webpack(webpackConfig, (err, stats) => {
          spinner.stop()
          if (err) throw err
          process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
          }) + '\n\n')
      
          if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
          }
      
          fs.writeFile(Env, JSON.stringify(bkp, null, 2), function (err) {
            console.log(chalk.cyan('  Build finalizado com sucesso.\n'))
            console.log(chalk.yellow(
              '  Copie a pasta.\n' +
              '  Opening index.html over file:// won\'t work.\n'
            ))
          })
        })
      })
    })
  })
}