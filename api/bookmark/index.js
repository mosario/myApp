var express = require('express');
var fetch = require('isomorphic-fetch')
var pool = require('../../configureDb')

var router = express.Router();

router.get('/insert', function(req, res) {
	fetch(req.query.url).then(function(response) {
		return (response.text());
	}).then(function(responseText) {
  		var title = responseText.match(/<title[^>]*>([^<]+)<\/title>/)[1];
		pool.connect().then(client => {
			var queryText = 'INSERT INTO bookmarks(title, url) VALUES($1, $2)';
			client.query(queryText, [title, req.query.url])
			.then(res => {
				client.release()
			})
		.catch(e => {
			client.release()
			console.error('query error', e.message, e.stack)
			})
		})
  		res.send(title);
  	});
});

router.get('/select', function(req, res) {
	function selectRow(callback){
		pool.connect().then(client => {
			client.query('SELECT * FROM bookmarks').then(res => {
				client.release()
				callback(res.rows)
			}).catch(e => {
				client.release()
				console.error('query error', e.message, e.stack)
			})
		})
	}

	selectRow(result => {
		res.send(result);
	});

});

module.exports = router;