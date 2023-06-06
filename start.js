const app = require('./app');
const PORT = 5000;

const server = app.listen(PORT, function () {
	console.log(`Express is running on port ${server.address().port}`);
})

