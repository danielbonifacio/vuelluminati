'use strict'

const enviroment = require('./abstractions/enviroment')
const component = require('./abstractions/component')
const moduleController = require('./abstractions/modules')

const add = new Object

add.env = (args) => enviroment.add(args)
add.component = (args) => component.add(args)
add.module = (args) => moduleController.create(args)

module.exports = add
