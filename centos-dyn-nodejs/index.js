var express = require('express');
var pg = require('pg');

// Constants
var PORT = process.env.NODE_LISTEN_PORT;
var BDD_PORT = process.env.DB_PORT_5432_TCP_PORT
var BDD_ADDR = process.env.DB_PORT_5432_TCP_ADDR
var conString = "postgres://postgres@"+ BDD_ADDR + ":" + BDD_PORT + "/postgres";

// App
var app = express();
app.get('/', function (req, res) {
	res.send('Hello World from node js listening on port ' + PORT + '\n');
});

app.get('/bdd', function (req, res) {
	var client = new pg.Client(conString);
	client.connect();
	var versionQuery = client.query("SELECT version()");
	var reponse = ""
	versionQuery.on('row', function(row) {
		console.log(row);
		reponse += row;
	});

	versionQuery.on('end', function() { 
		client.end();
	});
	res.send('Hello from ' + reponse + ' thru node js listening on port ' + PORT + ' \n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);