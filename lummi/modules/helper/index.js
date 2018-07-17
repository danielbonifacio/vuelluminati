'use strict'

const chalk = require('chalk')
const Envs = require('./envs.json')

const Helpers = {
	'Ambientes': Envs
}

const Helper = new Object

Helper.Index = () => {
	Object.keys(Helpers).map(key => {
		console.log(chalk.bgGreen(` ${key} `))
		Helpers[key].map(helper => {
			console.log(`	${helper.command}\n	` + chalk.grey(`# ${helper.description}\n`))
		})
	})
}

module.exports = Helper
