//set up code to connect Node to MySql
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "BonnieMad1son",
	database: "sushi_db"
});

connection.connect(function(err){
	if (err) {
		console.log("error connecting: " + err);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

module.exports = connection;