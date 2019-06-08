# Require From Web

[![Travis](https://img.shields.io/travis/TiagoDanin/Require-From-Web.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/Require-From-Web) [![Downloads](https://img.shields.io/npm/dt/require-from-web.svg?style=flat-square)](https://npmjs.org/package/require-from-web) [![Node](https://img.shields.io/node/v/require-from-web.svg?style=flat-square)](https://npmjs.org/package/require-from-web) [![Version](https://img.shields.io/npm/v/require-from-web.svg?style=flat-square)](https://npmjs.org/package/require-from-web) [![XO code style](https://img.shields.io/badge/code%20style-XO-red.svg?style=flat-square)](https://github.com/xojs/xo) 

Import/Load/Require module from url

## Installation

Module available through the [npm registry](https://www.npmjs.com/). It can be installed using the  [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) or [`yarn`](https://yarnpkg.com/en/) command line tools.

```sh
# NPM
npm install require-from-web --save
# Or Using Yarn
yarn add require-from-web
```

## Example

```js
const requireFromWeb = require('require-from-web')

const url = 'https://unpkg.com/jformat@1.0.4/index.js'

requireFromWeb(url).then(format => {
	const text = format('Forever {Python}', {Python: 'JavaScript'})
	console.log(text) // Forever JavaScript
})
```

## Documentation

### Options :: requireFromWeb(url, axiosOptions, code)

#### url
Url of file.

Type: `String`

#### axiosOptions**
Config/option of Axios.

Type: `Object`

#### code
Add more code in end script.

Type: `String`

## Tests

To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies

- [axios](https://ghub.io/axios): Promise based HTTP client for the browser and node.js

## Dev Dependencies

- [xo](https://ghub.io/xo): JavaScript happiness style linter ❤️

## Contributors

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/Require-From-Web/issues). [List of all contributors](https://github.com/TiagoDanin/Require-From-Web/graphs/contributors).

## License

[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)