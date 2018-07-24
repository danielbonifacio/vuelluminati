'use strict'

const chalk = require('chalk')
const path = require('path')
const { Root } = require('../../config/dir')
const Envs = require('./envs.json')
const Components = require('./components.json')
const Package = require(path.resolve(Root, 'package.json'))

const Helpers = {
	'Ambientes': Envs,
	'Componentes': Components
}

const Helper = new Object

Helper.Index = () => {
	Object.keys(Helpers).map(key => {
		console.log('   ' + chalk.bgGreen(` ${key} `))
		Helpers[key].map(helper => {
			console.log(`      ${helper.command}\n      ` + chalk.grey(`# ${helper.description}\n`))
		})
	})
}

Helper.Version = () => {
	console.log(`   Lummi está na versão: ` + chalk.green(`${'0.2.1'}`))
	console.log(`   O projeto está na versão: ` + chalk.green(`${Package.version}`))
}

module.exports = Helper
