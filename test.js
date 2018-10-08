const requireFromUrl = require('.')
const assert = require('assert')

var url = 'https://unpkg.com/jformat@1.0.4/index.js'
requireFromUrl(url).then((format) => {
	assert.equal(
		format("Forever {Python}", {Python: "JavaScript"}),
		'Forever JavaScript'
	)
	console.log('Done!')
})
