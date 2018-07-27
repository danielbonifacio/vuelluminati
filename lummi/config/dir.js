'use strict'

const path = require('path')
const root = '../..'
const core = 'src/core'

const config = path.join(root, core, 'config')

const Env = path.join(__dirname, config, 'env.json')
const Envs = path.join(__dirname, config, 'envs.json')
const Root = path.join(__dirname, root)
const Atoms = path.join(__dirname, root, 'src/components/atoms')
const Molecules = path.join(__dirname, root, 'src/components/molecules')
const Organisms = path.join(__dirname, root, 'src/components/organisms')
const Components = path.join(__dirname, root, 'src/components')
const Modules = path.join(__dirname, root, 'src/core/ecosystem/store/modules')

module.exports = { Env, Envs, Root, Atoms, Molecules, Organisms, Components, Modules }
