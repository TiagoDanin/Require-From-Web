const assert = require('assert')
const requireFromWeb = require('.')

const url = 'https://unpkg.com/jformat@1.0.4/index.js'
requireFromWeb(url).then(format => {
	assert.strictEqual(
		format('Forever {Python}', {Python: 'JavaScript'}),
		'Forever JavaScript'
	)
	console.log('Done!')
})
