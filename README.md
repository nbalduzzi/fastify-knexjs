# Fastify KnexJS Plugin

![Test](https://github.com/nbalduzzi/fastify-knexjs/workflows/Test/badge.svg)
![Semantic Release](https://github.com/nbalduzzi/fastify-knexjs/workflows/Semantic%20Release/badge.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/fastify-knexjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fastify-knexjs/)

## Installation

```bash
npm install fastify-knexjs --save
```

## Usage

```javascript
fastify.register(require('fastify-knexjs'), options, (err) =>
  console.error(err)
);

fastify.get('/', (request, reply) => {
  console.log(fastify.knex); // Knex DB instance
});
```

## Options

KnexJS client DB configuration JSON object.

<http://knexjs.org/#Installation-client>

## Author

[Nicolás Balduzzi](nico.balduzzi@gmail.com)

## Contributors

[Patrick Heneise](https://github.com/PatrickHeneise)

## License

Licensed under [MIT](./LICENSE).
