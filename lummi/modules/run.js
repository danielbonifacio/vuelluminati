'use strict'
const build = require('./build')
const run = new Object

run.build = (args) => build.build(args)
run.dev = () => build.dev()

module.exports = run
