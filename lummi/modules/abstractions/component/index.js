'use strict'

const _ = require('lodash')
const Templates = require('./templates')
const fs = require('fs')
const readline = require('readline')
const path = require('path')
const chalk = require('chalk')
const { Components } = require('../../../config/dir')

let Component = new Object

/**
 * Cria um componente em um diretório personalizado
 * @param {array} args Argumentos utilizados na função
 */
Component.add = (args) => {
	// Verifica se algum argumento foi passado
	if (!args[0]) {
		return console.log(chalk.bgRed(' Erro! ') + ' O comando foi inserido incorretamente ')
	}

	let componentName = ''
	let namespacedString = ''
	let namespace = args[0].split('/')
	let preProcessor = args[1]

	if (namespace.length > 1) {
		componentName = namespace.slice(namespace.length - 1).toString()
		namespacedString = namespace.slice(0, -1).join('/')
	} else {
		componentName = namespace.toString()
	}

	let Css = {
		name: _.kebabCase(componentName),
		preProcessor: _.lowerCase(preProcessor)
	}

	let Vue = {
		name: _.upperFirst(componentName)
	}

	let template
		= Templates.Template.replace('{{component_name}}', Css['name'])
		+ Templates.Script.replace('{{component_name}}', Vue['name'])
		+ Templates.Style
			.replace('{{component_pp}}', Css.preProcessor != '' ? ` lang="${Css['preProcessor']}"` : '')
			.replace('{{component_name}}', Css['name'])

	let filePath = path.resolve(Components, namespacedString)
	let fileName = `${Vue['name']}.vue`
	let writePath = path.resolve(filePath, fileName)

	let exists = false

	try {
		exists = fs.readFileSync(writePath, "utf8")
	} catch (err) {}

	if (exists) {
		return console.log(chalk.bgRed(' Erro! ') + ' Este componente já existe!')
	}

	try {
		ensureDirExistence(filePath)
		fs.writeFileSync(writePath, template)
		console.log(chalk.bgGreen(` ${Vue['name']} `) + ' foi criado com sucesso!')
	} catch (err) {
		console.log(chalk.bgRed(' Erro! ') + ' Houve um erro ao criar o componente!')
		if (err.code == 'ENOENT') {
			console.log('Parece que você está tentando criar um componente em um diretório inexistente!')
		}
	}
}

function ensureDirExistence (filepath) {
	if (!fs.existsSync(filepath)) {
		fs.mkdirSync(filepath)
	}
}
module.exports = Component
