var express = require('express');
var fetch = require('isomorphic-fetch')
var pool = require('./configureDb')

var router = express.Router();

router.post('/', function(req, res, next) {
	fetch(req.query.url).then(function(response) {
		var title = response.text().match(/<title[^>]*>([^<]+)<\/title>/)[1];
		console.log('1111111111111111111111', title)
		return 'title';
	}).then(function(responseText) {
  		var title = responseText.match(/<title[^>]*>([^<]+)<\/title>/)[1];
		console.log('2222222222', title);
		pool.connect().then(client => {
			var queryText = 'INSERT INTO bookmarks(title, url) VALUES($1, $2)';
			client.query(queryText, [title, req.query.url])
			.then(res => {
				client.release()
				console.log('insert', res)
			})
		.catch(e => {
			client.release()
			console.error('query error', e.message, e.stack)
			})
		})
		console.error(err.stack);
  		res.status(500).send('Something broke!');
  		res.send('title');
  		next();
  	});
});

module.exports = router;