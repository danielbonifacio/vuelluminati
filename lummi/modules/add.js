'use strict'

const enviroment = require('./abstractions/enviroment')

const add = new Object

add.env = (args) => enviroment.add(args)

module.exports = add
