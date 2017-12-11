# Fastify KnexJS Plugin

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/chapuletta/fastify-knexjs.svg?branch=master)](https://travis-ci.org/chapuletta/fastify-knexjs)

## Installation

```
npm install fastify-knexjs --save
```

## Usage

```
fastify.register(require('fastify-knexjs'), options, err => console.error(err))

fastify.get('/', (request, reply) => {
  console.log(fastify.knex) // Knex DB instance
})
```

## Options

KnexJS client DB configuration JSON object.

http://knexjs.org/#Installation-client

## Author

[Nicolás Balduzzi](nico.balduzzi@gmail.com)

## License

Licensed under [MIT](./LICENSE).
