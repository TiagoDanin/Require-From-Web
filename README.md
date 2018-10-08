# Require-From-Web [![Build Status](https://travis-ci.org/TiagoDanin/Require-From-Web.svg?branch=master)](https://travis-ci.org/TiagoDanin/Require-From-Web)

Import/Load/Require module from url

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) command line tools.

```sh
npm install require-from-web --save
```

## How to Use

### Example

```JavaScript
const requireFromWeb = require('require-from-web')

const url = 'https://unpkg.com/jformat@1.0.4/index.js'
requireFromWeb(url).then((format) => {
	format("Forever {Python}", {Python: "JavaScript"}) //Forever JavaScript
})
```

### Options :: requireFromWeb(url, axiosOptions)

- **url** - String
> Url of file.

- **axiosOptions** - Object
> Config/option of Axios.</br>`

## Dependencies

- [axios](https://ghub.io/axios): Promise based HTTP client for the browser and node.js

## License

MIT
