const conn = require('../db/connection');
const sqlStm = require('../common/SQLStatement');

function getRoleUsers(req, res) {
	conn.query(sqlStm.getRoleUsers, function (err, result) {
		if (err) throw err;
		res.send(result);
	})
}

module.exports = {
	getRoleUsers,
}