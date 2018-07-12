'use strict'
const build = require('./build')
const run = new Object

run.build = () => build.build()
run.dev = () => build.dev()

module.exports = run
