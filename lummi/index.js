'use strict'

const chalk = require('chalk')

let args = process.argv.slice(2)

if (args.includes('add')) {
	const add = require('./modules/add')
	let willAdd = args[1]

	if (willAdd == 'env') {
		return add.env(args.slice(2))
	}
}

if (args.includes('delete')) {
	const del = require('./modules/delete')
	let willDelete = args[1]

	if (willDelete == 'env') {
		return del.env(args[2])
	}
}

if (args.includes('update')) {
	const update = require('./modules/update')
	let willUpdate = args[1]

	if (willUpdate == 'env') {
		return update.env(args.slice(2))
	}
}

if (args.includes('show')) {
	const show = require('./modules/show')
	let willShow = args[1]

	if (willShow == 'env') {
		return show.env()
	}
}

if (args.includes('change')) {
	const change = require('./modules/change')
	let willShow = args[1]

	if (willShow == 'env') {
		return change.env(args[2])
	}
}

if (args.includes('run')) {
	const run = require('./modules/run')
	let willRun = args[1]

	if (willRun == 'build') {
		return run.build()
	}

	if (willRun == 'dev') {
		return run.dev()
	}
}

if (args.includes('-h') || args.includes('--help')) {
	const Helper = require('./modules/helper')
	Helper.Index()
}

else {
	let helper = true
	console.log('Comando não reconhecido.')
	console.log('Digite ' + chalk.bgBlue(' node lummi -h ') + ' para ver a lista de comando disponíveis')
}
