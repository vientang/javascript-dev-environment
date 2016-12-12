import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';


/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (request, response) => {
	response.json([
		{"id": 1, "firstName": "Bob", "lastName": "Smith","email": "bob@you.com"},
		{"id": 2, "firstName": "Cara", "lastName": "Fenu","email": "cara@you.com"},
		{"id": 3, "firstName": "Dan", "lastName": "Neumann","email": "dan@you.com"}
	]);
});

app.listen(port, err => {
	if (err) {
		console.log(err + ": " + "Couldn't connect to local host port " + port);
	} else {
		open('http://localhost:' + port);
	}
});