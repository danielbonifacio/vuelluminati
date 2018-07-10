'use strict'
require('./check-versions')()

// Antes de tudo, define o ambiente como Produção
process.env.NODE_ENV = 'production'

const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const envDir = __dirname + '/../src/core/config/env.json'
const enviroment = require(envDir)

let bkp   = Object.assign({}, enviroment)
let prod  = enviroment

prod.env = 'prod'

// Altera o ambiente interno da aplicação para produção
fs.writeFile(envDir, JSON.stringify(prod, null, 2), function (err) {
  // Caso haja algum erro ao escrever o arquivo
  if (err){
    console.log("Erro ao compilar: não foi possível alterar o ambiente.\n")
    console.log(chalk.red(err))
    return;
  }

  // Informa ao usuário que está iniciando a compilar
  const spinner = ora('Compilando...')
  spinner.start()

  // Processo de compilação
  rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err =>  {
    // Caso haja algum erro
    if (err) throw err

    webpack(webpackConfig, (err, stats) =>  {
      // Para de girar o Spinner
      spinner.stop()

      // Caso haja algum erro ao compilar o Webpack
      if (err) throw err


      process.stdout.write(stats.toString({
        colors:true,
        modules:false,
        children:false, // Caso esteja usando o ts-loader, setar isso como true irá fazer com que os erros do TypeScript sejam exibidos durante a compilação
        chunks:false,
        chunkModules:false
      }) + '\n\n')

      // Caso haja algum erro nos stats webpack
      if (stats.hasErrors()) {
        console.log(chalk.red('Erro durante a compilação.\n'))
        process.exit(1)
      }

      // Após compilado, retorna ao enviroment anterior
      fs.writeFile(envDir, JSON.stringify(bkp, null, 2), function (err) {
        // Caso haja algum erro ao escrever o arquivo
        if (err){
          console.log('Compilado, porém não foi possível reverter para o ambiente anterior.\n')
          console.log('Rode o compando lummi --env={seu ambiente} ou altere manualmente')
          console.log(chalk.red(err))
          return
        }

        console.log(chalk.cyan('Compilado com sucesso.\n'))
        console.log(chalk.yellow(
        'Copie a pasta \'dist\' para seu servidor HTTP .\n' +
        'Abrir o aquivo index.html sob o protocolo file:// não irá funcionar.\n'))
      })
    })
  })
})
