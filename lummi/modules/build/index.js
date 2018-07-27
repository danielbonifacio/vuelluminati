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
let Package = require(path.resolve(Root, 'package.json'))

// Armazena o backup com o ambiente
let bkp = JSON.stringify(enviroment, null, 2)

// Configura o ambiente para produção
let prod = 'prod'

// Altera o ambiente interno da aplicação para produção
module.exports = {
  build: (args) => {
    process.env.NODE_ENV = 'production'
    const spinner = ora('Compilando...')
    spinner.start()

    // Versionamento
    let ver = Package.version.split('.')
		let major = ver[0]
		let minor = ver[1]
		let patch = ver[2]

  	if (args.includes('-M') || args.includes('--major')) {
  		major++
  	}

  	if (args.includes('-m') || args.includes('--minor')) {
  		minor++
  	}

  	if (args.includes('-p') || args.includes('--patch')) {
  		patch++
  	}

  	Package.version = `${major}.${minor}.${patch}`
  	try {
			fs.writeFileSync(path.resolve(Root, 'package.json'), JSON.stringify(Package, null, 2))
  	} catch (err) {
  		console.log('Não foi possível alterar a versão do projeto, mas isso não significa que ele não foi compilado.')
  		console.log(err)
  	}

  	// Alterando o ambiente para produção
    try {
      fs.writeFileSync(Env, JSON.stringify(prod, null, 2))
    } catch (err) {
      console.log("Erro ao compilar: não foi possível alterar o ambiente.\n")
      console.log(err)
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
          fs.writeFileSync(Env, bkp)
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
