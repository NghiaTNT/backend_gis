const conn = require('../db/connection');

function getRoleUsers(req, res) {
	var sqlStatement = "SELECT * FROM role";
	conn.query(sqlStatement, function (err, result) {
		if (err) throw err;
		res.send(result);
	})
}

module.exports = {
	getRoleUsers,
}