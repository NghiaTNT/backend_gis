const express = require('express');
const user = require('../controller/user/user');

const router = express.Router();

router.get('/', function (req, res) {
	res.send('It works!');
})

router.get('/role', user.getRoleUsers);

module.exports = router;