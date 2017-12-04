const fastify = require('fastify')()
const tap = require('tap')
const fastifyKnexJS = require('./index')

tap.test('fastify.knex should exist', test => {
  test.plan(2)

  fastify.register(fastifyKnexJS, {
    client: 'mysql',
    connection: {
      host: '127.0.0.1'
    }
  })

  fastify.ready(err => {
    test.error(err)
    test.ok(fastify.knex)

    fastify.close(() => test.end())
  })
})
