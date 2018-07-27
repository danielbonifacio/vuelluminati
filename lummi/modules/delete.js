'use strict'

const enviroment = require('./abstractions/enviroment')

const del = new Object

del.env = (args) => enviroment.del(args)

module.exports = del
