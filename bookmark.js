var express = require('express');
var fetch = require('isomorphic-fetch')
var pool = require('./configureDb')

var router = express.Router();

router.get('/', function(req, res) {
	fetch(req.query.url).then(function(response) {
		return (response.text());
	}).then(function(responseText) {
  		var title = responseText.match(/<title[^>]*>([^<]+)<\/title>/)[1];
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
  		res.send(title);
  	});
});

module.exports = router;