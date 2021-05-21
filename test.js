const Fastify = require('fastify');
const { test } = require('tap');
const fastifyKnexJS = require('./index');

test('fastify.knex should exist', (t) => {
  t.plan(2);

  register(t, { client: 'mysql' }, (err, fastify) => {
    t.error(err);
    t.ok(fastify.knex);
  });
});

test('fastify.knex double decorator registered', t => {
  t.plan(2);

  const fastify = Fastify();
  t.teardown(() => fastify.close());

  fastify
    .register(fastifyKnexJS, { client: 'mysql' })
    .register(fastifyKnexJS, { client: 'mysql' })
    .ready(err => {
      t.ok(err);
      t.equal(err.message, "The decorator 'knex' has already been added!");
    });
});

test('fastify.knex should fail on no client', (t)=> {
  t.plan(2);

  register(t, {}, (err) => {
    t.ok(err);
    t.match(err.message, "knex: Required configuration option 'client' is missing");
  });
});

function register (t, options, callback) {
  const fastify = Fastify();
  t.teardown(() => fastify.close());

  fastify.register(fastifyKnexJS, options)
    .ready(err => callback(err, fastify));
}
