'use strict'
const build = require('./build')
const run = new Object

run.build = () => build()

module.exports = run
