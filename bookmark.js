var express = require('express');
var fetch = require('isomorphic-fetch')


var router = express.Router();

router.get('/', function(req, res) {
	fetch(req.query.url).then(function(response) {
		return (response.text());
	}).then(function(responseText) {
  		var title = responseText.match(/<title[^>]*>([^<]+)<\/title>/)[1];
  		res.send(title);
  	});
});

module.exports = router;