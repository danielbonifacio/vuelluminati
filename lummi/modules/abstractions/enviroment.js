'use strict'

const readline = require('readline');
const chalk = require('chalk')
const fs = require('fs')
const { Env, Envs } = require('../../config/dir')

const Enviroment = {}

Enviroment.Index = function (command) {

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	rl.question('O que você gostaria de fazer com os ambientes? ', (answer) => {
		if (answer == 'add' || answer == 'adicionar') {
			let name = ''
			let api = ''
      let app = ''
      let mod = null
			let comment = null
			rl.question('Qual será o nome do ambiente? ', answer => {
				name = answer
				rl.question('Qual será a URL da API deste ambiente? ', answer => {
          api = answer
          rl.question('Qual será a URL da Aplicação deste ambiente? ', answer => {
            app = answer;
            rl.question('Qual será o módulo deste ambiente? ', answer => {
              mod = answer != '' ? answer : null
              rl.question('Coment algo sobre este ambiente: ', answer => {
                comment = answer != '' ? answer : null
                rl.close()
                return Enviroment.add([
                  {
                    key: '-name',
                    value: name,
                  },
                  {
                    key: '-module',
                    value: mod,
                  },
                  {
                    key: '-api',
                    value: api,
                  },
                  {
                    key: '-app',
                    value: app,
                  },
                  {
                    key: '-comment',
                    value: comment,
                  },
                ]);
              })
            })
          })
				})
      })
		}

		else {
			console.log(chalk.red(`Você não pode ${answer} um ambiente. Verifique o comando e tente novamente!`))
			rl.close()
		}

	})
}


/**
 * Altera o ambiente atual para o inserido
 * @param {string} enviroment Nome do ambiente para qual será alterado
 */
Enviroment.change = (enviroment) => {
	let env = require(Env)
	env = enviroment

	if (!enviromentExists(enviroment)) {
		showUp('Este ambiente não existe.')
		process.exit()
	}

	env = JSON.stringify(env, null, 2)

	try {
		fs.writeFileSync(Env, env)
		showUp('Ambiente alterado para: ' + chalk.bgGreen(` ${enviroment} `))
	} catch (err) {
		showUp(chalk.yellow('Erro ao alterar o ambiente'))
	} finally {
		process.exit()
	}
}

/**
 * Imprime no console ambientes específicos
 * @param {string} query Query para pesquisa de ambientes
 */
Enviroment.show = function (query) {
	let space = '   '
	if (!fs.existsSync(Envs)) {
		return console.log(space + chalk.bgMagenta('O Arquivo de ambientes não foi encontrado!') + '\n' + space + 'Gere ambientes com o comando: ' + chalk.inverse(' lummi generate envs '))
	}
	query = query != undefined ? query : false
	let env = require(Env)
	let envs = require(Envs)
	if (!query) {
		console.log('\n')
		console.log(space + chalk.bgGreen(` ${env} `));
		envs[env]['comment'] != null && console.log(space + chalk.inverse(' # ' + envs[env]['comment'] + ' '))

		Object.keys(envs[env]).map(val => {
			if (val != 'comment') {
				console.log(space + chalk.bgGreen(` ${val} `) + ' - ' + chalk.green(envs[env][val]))
			}
		})
    console.log('\n')
	} else if (query == 'all') {
		console.log('\n')
		Object.keys(envs).map(env => {
			console.log(space + chalk.bgGreen(` ${env} `))
			envs[env]['comment'] != null && console.log(space + chalk.inverse(" # " + envs[env]['comment'] + " "));
			Object.keys(envs[env]).map(val => {
				if (val != 'comment') {
					console.log(space + chalk.bgGreen(` ${val} `) + ' - ' + chalk.green(envs[env][val]))
				}
			})
			console.log('\n')
		})
	} else {
    return console.log('Query não pode ser processada')
  }
	process.exit()
}

/**
 * Atualiza o valor de um ambiente selecioado
 * @param {array} args - Nome do Ambiente, url da api e url da aplicação
 */
Enviroment.update = (name, args) => {
	let envname = null;
	let api     = null;
	let app     = null;
	let module  = null;
  let comment = null;

  args.map(arg => {
    if (arg.key == '-name' || arg.key == '-n')
      return envname = arg.value;

    if (arg.key == '-api' || arg.key == '-A')
      return api = arg.value;

    if (arg.key == '-app' || arg.key == '-a')
      return app = arg.value;

    if (arg.key == '-module' || arg.key == '-m')
      return module = arg.value;

    if (arg.key == '-comment' || arg.key == '-c')
      return comment = arg.value;
  });

  if (envname == 'prod') {
    return showUp(chalk.red('Você não pode alterar o nome do ambiente "prod"'));
  }

	// ambientes
	let envs = {}

	// lê os ambientes atuais
	try {
		envs = JSON.parse(fs.readFileSync(Envs))
		if (!envs[name]) return showUp(chalk.red('Você está tentando atualizar um ambiente que não existe'))
	} catch (err) {
		if (err)
			console.log('Erro ao ler ambientes')
			console.log(err)
			return
  }

  if (envname != null) {
    let bkp = JSON.parse(JSON.stringify(envs[name]));
    delete envs[name];
    envs[envname] = {
      api: api != null ? api : envs[name].api,
      app: app != null ? app : envs[name].app,
      comment: comment != null ? comment : envs[name].comment,
      module: module != null ? module : envs[name].module,
    };
  } else {
    envs[name] = {
      api: api != null ? api : envs[name].api,
      app: app != null ? app : envs[name].app,
      comment: comment != null ? comment : envs[name].comment,
      module: module != null ? module : envs[name].module,
    };
  }
  envs = JSON.stringify(envs, null, 2);
	try {
		fs.writeFileSync(Envs, envs)
		return showUp('O ambiente ' + chalk.bgGreen(` ${name} `) + ' atualizado com sucesso')
	} catch (err) {
		return showUp(chalk.red('Não foi possível salvar o ambiente! \n   ' + err))
	}
}


/**
 * Adiciona um ambiente
 * @param {array} args Nome do Ambiente, url da api e url da aplicação
 */
Enviroment.add = args => {
	let envname = null;
	let api     = null;
	let app     = null;
	let module  = null;
  let comment = null;

  args.map(arg => {
    if (arg.key == '-name' || arg.key == '-n')
      return envname = arg.value;

    if (arg.key == '-api' || arg.key == '-A')
      return api = arg.value;

    if (arg.key == '-app' || arg.key == '-a')
      return app = arg.value;

    if (arg.key == '-module' || arg.key == '-m')
      return module = arg.value;

    if (arg.key == '-comment' || arg.key == '-c')
      return comment = arg.value;
  });

	// ambientes
	let envs = {}

	// lê os ambientes atuais
	try {
		envs = JSON.parse(fs.readFileSync(Envs))
		if (envs[envname]) return showUp(chalk.red('Você está tentando inserir um ambienente que já existe!'))
	} catch (err) {
		if (err)
			console.log('Erro ao ler ambientes')
			console.log(err)
			return
    }

  envs[envname] = { api, app, comment, module };
  envs = JSON.stringify(envs, null, 2);

	// grava o ambiente
	try {
		fs.writeFileSync(Envs, envs)
		return showUp('O ambiente ' + chalk.bgGreen(` ${envname} `) + ' foi criado com sucesso')
	} catch (err) {
		return showUp(chalk.red('Não foi possível salvar o ambiente! \n   ' + err))
	}
}


/**
 * Deleta um Ambiente previamente cadastrado
 * @param {stringify} enviroment Ambiente a ser deletado
 */
Enviroment.del = enviroment => {
	// Verifica se o usuário está tentando deletar o ambiente de produção
	if (enviroment == 'prod') {
		return showUp(chalk.bgRed(' Erro! ') + `  Você não pode deletar o ambinente ${chalk.bgGreen(' prod ')}!\n   ${chalk.grey('O ambiente prod é o ambiente de produção')}`)
	}

	// Recupera o ambiente atual
	let actualEnv = getActualEnviroment()
	if (enviroment == actualEnv) {
		return showUp(chalk.yellow('Impossível deletar um ambiente em uso.'))
	}

	// Recupera os ambientes
	let envs = getEnviroments()

	// Deleta o ambiente
	envs[enviroment] = undefined
	saveEnviroments(envs)
	return showUp("O ambiente " + chalk.bgGreen(` ${enviroment} `) + " foi deletado com sucesso");
}


/**
 * Imprime, no console, um valor com espaçamentos.
 * @param {string} message Mensagem à ser exibida com destaque
 */
function showUp(message) {
	console.log('\n')
	console.log('   ' + message)
	console.log('\n')
}


/**
 * Verifica se o ambiente inserido existe ou não.
 * @param {string} enviroment Ambiente a ser verificada a existência
 */
function enviromentExists(enviroment) {
	try {
		let envs = fs.readFileSync(Envs, "utf-8")

		if (!JSON.parse(envs).hasOwnProperty(enviroment)) {
			return false
		} else {
			return true
		}

	} catch (err) {
		showUp('Não foi possível ler os ambientes já cadastrado. Você cadastrou algum?')
		showUp(chalk.cyan(err))
	}
}


/**
 * Recupera todos os ambientes
 */
function getEnviroments () {
	try {
		return JSON.parse(fs.readFileSync(Envs, "utf8"))
	} catch (err) {
		return showUp(chalk.red('Erro ao ler os ambientes atuais'))
	}
}


/**
 * Recupera o ambiente atual
 */
function getActualEnviroment () {
	try {
		return JSON.parse(fs.readFileSync(Env, "utf8"))
	} catch (err) {
		return showUp(chalk.bgYellow('Erro ao ler os ambientes.'))
	}
}


/**
 * Salva o arquivo com os ambientes
 * @param {object} enviroments Objeto com os ambientes à serem salvos
 */
function saveEnviroments (enviroments, callbackName) {
	try {
		return fs.writeFileSync(Envs, JSON.stringify(enviroments, null, 2))
	} catch (err) {
		return showUp(chalk.red('Erro ao deletar o ambiente ') + chalk.bgRed(' ' + callbackName) + ' \n   ' + chalk.cyan(err))
	}
}

module.exports = Enviroment
