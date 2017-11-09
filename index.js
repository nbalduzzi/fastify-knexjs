'use strict'

const fastifyPlugin = require('fastify-plugin')
const knex = require('knex')

const fastifyKnex = (fastify, opts, next) => {
  try {
    const handler = knex(opts)
    fastify.decorate('knex', handler)
    next()
  } catch (err) {
    next(new Error(err))
  }
}

module.exports = fastifyPlugin(fastifyKnex, '>=0.30.0')
