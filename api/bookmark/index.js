var express = require('express');
var fetch = require('isomorphic-fetch')
var pool = require('../../configureDb')

var router = express.Router();

router.get('/insert', function(req, res) {
	function InsertRow(callback){
		fetch(req.query.url).then(function(response) {
			return (response.text());
		}).then(function(responseText) {
	  		var title = responseText.match(/<title[^>]*>([^<]+)<\/title>/)[1];
			pool.connect().then(client => {
				var queryText = 'INSERT INTO bookmarks(title, url) VALUES($1, $2) RETURNING id';
				client.query(queryText, [title, req.query.url])
				.then(res => {
					client.release()
					callback(title, res.rows[0])
				})
			.catch(e => {
				client.release()
					console.error('query error', e.message, e.stack)
				})
			})
	  	});
	}
	
	InsertRow((title, result) => {
		res.send({
			title: title,
			id: result.id
		});
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

router.get('/delete', function(req, res){
	function deleteRow(callback){
		pool.connect().then(client => {
			var queryText = 'DELETE FROM bookmarks WHERE id = $1';
			client.query(queryText, [req.query.id])
			.then(res => {
				client.release()
				callback(res)
			})
		.catch(e => {
			client.release()
			console.error('query error', e.message, e.stack)
			})
		})
	}

	deleteRow(result => {
		res.send(result);
	})
})

module.exports = router;