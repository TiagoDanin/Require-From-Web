const axios = require('axios')

module.exports = async (url, options, code) => {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string')
	}

	const response = await axios({
		method: 'GET',
		url,
		...options
	})
	let string = response.data.toString()
	if (code) {
		string += '\n' + code
	}

	const _module = new module.constructor()
	_module.filename = url
	_module._compile(string, url)

	return _module.exports
}
