const axios = require('axios')
module.exports = async (url, options, code) => {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string')
	}

	var response = await axios({
		method: 'GET',
		url: url,
		...options
	})
	var string = response.data.toString()
	if (code) {
		string += '\n' + code
	}
	var _module = new module.constructor()
	_module.filename = url
	_module._compile(string, url)

	return _module.exports
}
