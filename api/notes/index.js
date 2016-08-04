var express = require('express');
var fetch = require('isomorphic-fetch')
var pool = require('../../configureDb')

var router = express.Router();

router.get('/select', function(req, res) {
	function selectRow(callback){
		pool.connect().then(client => {
			client.query('SELECT * FROM notes').then(res => {
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

router.get('/update', function(req, res) {
	function updateRow(callback){
		pool.connect().then(client => {
			var queryText = 'UPDATE notes SET text = $1 WHERE id =1 RETURNING id';
			client.query(queryText, [req.query.text])
			.then(res => {
				client.release()
				callback(res.rows[0])
			})
		.catch(e => {
			client.release()
				console.error('query error', e.message, e.stack)
			})
		})
	}
	
	updateRow((result) => {
		res.send({
			id: result.id
		});
	});
});

module.exports = router;