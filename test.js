const os = require('os');
const Fastify = require('fastify');
const tap = require('tap');
const fastifyKnexJS = require('./index');

tap.test('fastify.knex should exist', (test) => {
  test.plan(2);

  const fastify = new Fastify();
  fastify.register(fastifyKnexJS, {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
    },
  });

  fastify.ready((err) => {
    test.error(err);
    test.ok(fastify.knex);

    fastify.close(() => test.end());
  });
});

tap.test('fastify.knex should be destroyed on close', async (test) => {
  test.plan(1);
  const fastify = new Fastify();
  fastify.register(fastifyKnexJS, {
    client: 'sqlite',
    useNullAsDefault: true,
    connection: {
      filename: `${os.tmpdir()}/mytestdb`,
    },
  });

  await fastify.ready();
  // we need to do a real query to force a connection to be created:
  const res = await fastify.knex.raw('select 1');
  test.same(res, [{ '1': 1 }]);
  await fastify.close();
  test.end();
});
