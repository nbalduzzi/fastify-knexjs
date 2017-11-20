# Fastify KnexJS Plugin

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/chapuletta/fastify-knex.svg?branch=master)](https://travis-ci.org/chapuletta/fastify-knex)

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

[Nicolás Balduzzi](nico.balduzzi@gmail.com)

## License

Licensed under [MIT](./LICENSE).
