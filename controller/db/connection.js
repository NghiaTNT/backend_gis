require('dotenv').config();

const mysql = require('mysql');

const conn = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE_NAME
});

conn.connect((err) => {
	if (err) {
		console.log('Error connect db: ', err);
	} else {
		console.log('Succesfully connected!');
	}
})

module.exports = conn;