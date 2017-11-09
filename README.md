# Fastify KnexJS Plugin

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Usage

```
fastify.register(require('fastify-knex'), options, err => console.error(err))

fastify.get('/', (request, reply) => {
  console.log(fastify.knex) // Knex DB instance
})
```

## Options

Knex client DB configuration JSON object.

http://knexjs.org/#Installation-client

## Version

v1.0.0

## Author

- [Chapuletta](nico.balduzzi@gmail.com)

## License

Licensed under [MIT](./LICENSE).
