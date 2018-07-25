'use strict'

const _ = require('lodash')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const { Modules } = require('../../config/dir')

let ModulesController = new Object

let Template = `'use strict'

let {{module_name_capitalize_first}} = {
	namespaced: true,
	state: {
		{{state_name_underscore}}: {{state_value}}
	},
	getters: {
		{{state_name_camel_case}}: state => state.{{state_name_underscore}}
	},
	mutations: {
		{{state_name_camel_case}}: (state, payload) => state.{{state_name_camel_case}} = payload
	},
	actions: {
		set{{state_name_camel_case_upper_first}}: ({commit}, payload) => {
			commit('{{state_name_camel_case}}', payload)
		}
	}
}

export default {{module_name_capitalize_first}}
`;

ModulesController.create = args => {
	let module_name = args[0]
	let state_name = args[1]
	let state_value = args[2]

	if (state_name == 'undefined') {
		return console.log(chalk.bgRed(' Erro! ') + ' Um módulo precisa de no mínimo um state!')
	}

	let state_name_camel_case = _.camelCase(state_name)
	let state_name_underscore = _.snakeCase(state_name)
	let module_name_capitalize_first = _.upperFirst(_.camelCase(module_name))
	let state_name_camel_case_upper_first = _.upperFirst(_.camelCase(state_name))

	let newTemplate
		= Template
		.replace(/{{module_name_capitalize_first}}/g, module_name_capitalize_first)
		.replace(/{{state_name_underscore}}/g, state_name_underscore)
		.replace(/{{state_name_camel_case}}/g, state_name_camel_case)
		.replace(/{{state_name_camel_case_upper_first}}/g, state_name_camel_case_upper_first)
		.replace(/{{state_value}}/g, state_value)

	let filePath = Modules
	let fileName = `${module_name_capitalize_first}.js`
	let writePath = path.resolve(filePath, fileName)

	console.log(writePath)

	let exists = false

	try {
		exists = fs.readFileSync(writePath, "utf8")
	} catch (err) { }

	if (exists) {
		return console.log(chalk.bgRed(' Erro! ') + ' Este módulo já existe!')
	}

	try {
		ensureDirExistence(filePath);
		fs.writeFileSync(writePath, template);
		console.log(chalk.bgGreen(` ${module_name_capitalize_first} `) + " foi criado com sucesso!");
	} catch (err) {
		console.log(chalk.bgRed(" Erro! ") + " Houve um erro ao criar o módulo!");
		if (err.code == "ENOENT") {
			console.log("Parece que você está tentando criar um componente em um diretório inexistente!");
		}
	}
}

function ensureDirExistence(filepath) {
	if (!fs.existsSync(filepath)) {
		fs.mkdirSync(filepath)
	}
}

module.exports = ModulesController
