'use strict'
require('./check-versions')()

// Define o ambiente como Produção

const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../../config')
const webpackConfig = require('./webpack.prod.conf')
const { Root, Env } = require('../../config/dir')
const enviroment = require(Env)

// Armazena o backup com o ambiente
let bkp = Object.assign({}, enviroment)

// Configura o ambiente para produção
let prod = enviroment
prod.env = 'prod'

// Altera o ambiente interno da aplicação para produção
module.exports = {
  build: () => {
    process.env.NODE_ENV = 'production'
    const spinner = ora('Compilando...')
    spinner.start()

    try {
      fs.writeFileSync(Env, JSON.stringify(prod, null, 2))
    } catch (err) {
      console.log("Erro ao compilar: não foi possível alterar o ambiente.\n")
      console.log(chalk.red(err))
      return;
    }

    rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
      if (err) throw err

      webpack(webpackConfig, (err, stats) => {
        spinner.stop()
        if (err) throw err

        process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false, // Caso esteja usando o ts-loader, setar isso como true irá fazer com que os erros do TypeScript sejam exibidos durante a compilação
          chunks: false,
          chunkModules: false
        }) + '\n\n')

        // Caso haja algum erro nos stats webpack
        if (stats.hasErrors()) {
          console.log(chalk.red('Erro durante a compilação.\n'))
          process.exit(1)
        }

        try {
          fs.writeFileSync(Env, JSON.stringify(bkp, null, 2))
          console.log(chalk.cyan('Compilado com sucesso.\n'))
          console.log(chalk.yellow(
            '   Copie a pasta \'dist\' para seu servidor HTTP .\n' +
            '   Abrir o aquivo index.html sob o protocolo file:// não irá funcionar.\n'))
        } catch (err) {
          console.log('   Compilado, porém não foi possível reverter para o ambiente anterior.\n')
          console.log('   Digite ' + chalk.bgBlue(' node lummi change env <nome-do-ambiente> ') + ' para alterar o ambiente')
          console.log(chalk.red(err))
          return
        }
      })
    })
  },
  dev: () => {
    const devserver = require('./dev')
    devserver()
  }
}
