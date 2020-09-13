module.exports.index = function (req, res) {
	res.send('get list userr');
};
module.exports.getDetails = function (req, res) {
	console.log(req.query);
	res.send(req);
};
