var express = require('express');

var router = express.Router();

router.get('/adn', function (req, res) {
	res.send('okela')
})
module.exports = router;