const requireFromWeb = require('.')

const url = 'https://unpkg.com/jformat@1.0.4/index.js'

requireFromWeb(url).then(format => {
	const text = format('Forever {Python}', {Python: 'JavaScript'})
	console.log(text) // Forever JavaScript
})
