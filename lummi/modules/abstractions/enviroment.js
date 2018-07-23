'use strict'

const readline = require('readline');
const chalk = require('chalk')
const fs = require('fs')
const { Env, Envs } = require('../../config/dir')

const Enviroment = new Object

Enviroment.Index = function (command) {

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	rl.question('What do you think of Node.js? ', (answer) => {
		console.log(`Thank you for your valuable feedback: ${answer}`)
		rl.close()
	})

	if (command.includes('add')) {
		Enviroment.Add(command.slice(2))
	} else {

	}
	return
	// else {
	// 	return Enviroment.show()
	// }
}

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
		showUp('Ambiente alterado para: ' + chalk.cyan(enviroment))
	} catch (err) {
		showUp(chalk.yellow('Erro ao alterar o ambiente'))
	} finally {
		process.exit()
	}
}

Enviroment.show = function (query) {
	query = query != undefined ? query : false
	if (!query) {
		let env = require(Env)
		showUp('O ambiente atual é: ' + chalk.green(env))
	} else if (query == 'all') {
		let space = '   '
		let envs = require(Envs)
		console.log('\n')

		Object.keys(envs).map(env => {
			console.log(space + chalk.bgGreen(` ${env} `))
			Object.keys(envs[env]).map(val => {
				console.log(space + chalk.bgGreen(` ${val} `) + ' - ' + chalk.green(envs[env][val]))
			})
			console.log('\n')
		})

	}
	process.exit()
}

Enviroment.update = args => {
	let envname = args[0] != undefined ? args[0] : null
	let api     = args[1] != undefined ? args[1] : null
	let app     = args[2] != undefined ? args[2] : null

	let envs = {}

	// Caso o comando nçao seja inserio de forma correta
	if (!app || !api || !envname)
		return showUp(chalk.red('O comando update env não foi inserido corretamente'))

	// Recupera os envs atuais
	try {
		envs = JSON.parse(fs.readFileSync(Envs))

		// verifica se o ambiente que está sendo inserido já existe
		if (!envs[envname]) {
			return showUp(chalk.red('Você está tentando atualizar um ambienente que não existe!'))
		} else {
			envs[envname] = { api, app }
			envs = JSON.stringify(envs, null, 2)
		}
	} catch (err) {
		if (err)
			console.log('Erro ao ler ambientes'); console.log(err)
		return
	}

	// Adiciona o novo enviroment
	try {
		fs.writeFileSync(Envs, envs)
		return showUp('O ambiente ' + chalk.bgGreen(envname) + ' foi atualizado com sucesso')
	} catch (err) {
		return showUp(chalk.red('Não foi possível salvar o ambiente! \n   ' + err))
	}
}

Enviroment.add = args => {
	let envname = args[0] != undefined ? args[0] : null
	let api     = args[1] != undefined ? args[1] : null
	let app     = args[2] != undefined ? args[2] : null

	// Caso o comando nçao seja inserio de forma correta
	if (!app || !api || !envname)
		return showUp(chalk.red('O comando add env não foi inserido corretamente'))

	// Define no escopo da função a variável que irá conter os ambientes
	let envs = {}

	// Recupera os envs atuais
	try {
		envs = JSON.parse(fs.readFileSync(Envs))

		// verifica se o ambiente que está sendo inserido já existe
		if (envs[envname]) {
			return showUp(chalk.red('Você está tentando inserir um ambienente que já existe!'))
		} else {
			envs[envname] = { api, app }
			envs = JSON.stringify(envs, null, 2)
		}
	} catch (err) {
		if (err)
			console.log('Erro ao ler ambientes'); console.log(err)
			return
		}

	// Adiciona o novo enviroment
	try {
		fs.writeFileSync(Envs, envs)
		return showUp('O ambiente ' + chalk.bgGreen(envname) + ' foi criado com sucesso')
	} catch (err) {
		return showUp(chalk.red('Não foi possível salvar o ambiente! \n   ' + err))
	}
}

Enviroment.del = enviroment => {
	// Recupera os ambientes
	let envs = getEnviroments()

	// Deleta o ambiente
	envs[enviroment] = undefined
	saveEnviroments(envs, enviroment)
}

function showUp(message) {
	console.log('\n')
	console.log('   ' + message)
	console.log('\n')

}

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

function getEnviroments () {
	try {
		return JSON.parse(fs.readFileSync(Envs, "utf8"))
	} catch (err) {
		return showUp(chalk.red('Erro ao ler os ambientes atuais'))
	}
}

function saveEnviroments (enviroments, callbackName) {
	try {
		fs.writeFileSync(Envs, JSON.stringify(enviroments, null, 2))
		return showUp('O ambiente ' + chalk.red(callbackName) + ' foi deletado com sucesso')
	} catch (err) {
		return showUp(chalk.red('Erro ao deletar o ambiente ') + chalk.bgRed(' ' + callbackName) + ' \n   ' + chalk.cyan(err))
	}
}

module.exports = Enviroment
