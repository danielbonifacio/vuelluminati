'use strict'

const enviroment = require('./abstractions/enviroment')
const component = require('./abstractions/component')

const add = new Object

add.env = (args) => enviroment.add(args)
add.component = (args) => component.add(args)

module.exports = add
