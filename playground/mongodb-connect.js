//var MongoClient = require("mongodb").MongoClient;

var {MongoClient, ObjectID} = require("mongodb");



MongoClient.connect("mongodb://localhost:27017/TodoApp", 
	function(err, db){
if(err){return console.log("there was an error connecting to database server")}
	console.log("connected to database server");

/*db.collection("Todos").insertOne({
	text: "do something",
	completed: false
}, function(err, result){
	if(err){return console.log("error adding one to Todos database")}
		console.log(JSON.stringify(result.ops, undefined, 2))
}) */

//insert new doc into usersU collection
//name age location
//isnert one

/*db.collection("Users").insertOne({
	name: "Kristen",
	age: 26,
	location: "United States"
}, function (err, result){
	if(err){return console.log("unable to add user to Users database")}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
})*/

db.close();
});