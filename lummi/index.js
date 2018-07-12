'use strict'

const chalk = require('chalk')
const add = require('./modules/add')
const del = require('./modules/delete')
const update = require('./modules/update')
const show = require('./modules/show')
const change = require('./modules/change')
const run = require('./modules/run')

let args = process.argv.slice(2)

if (args.includes('add')) {
  let willAdd = args[1]

  if (willAdd == 'env') {
    return add.env(args.slice(2))
  }
}

if (args.includes('delete')) {
  let willDelete = args[1]

  if (willDelete == 'env') {
    return del.env(args[2])
  }
}

if (args.includes('update')) {
  let willUpdate = args[1]

  if (willUpdate == 'env') {
    return update.env(args.slice(2))
  }
}

if (args.includes('show')) {
  let willShow = args[1]

  if (willShow == 'env') {
    return show.env()
  }
}

if (args.includes('change')) {
  let willShow = args[1]

  if (willShow == 'env') {
    return change.env(args[2])
  }
}

if (args.includes('run')) {
  let willRun = args[1]

  if (willRun == 'build') {
    return run.build()
  }

  if (willRun == 'dev') {
    return run.dev()
  }
}

else {
  let helper = true

  console.log('Comando não reconhecido.')
  console.log('Digite ' + chalk.bgBlue(' node lummi -h ') + ' para ver a lista de comando disponíveis')
}
