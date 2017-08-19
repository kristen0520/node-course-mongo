//var MongoClient = require("mongodb").MongoClient;

var {MongoClient, ObjectID} = require("mongodb");



MongoClient.connect("mongodb://localhost:27017/TodoApp", 
	function(err, db){
if(err){return console.log("there was an error connecting to database server")}
	console.log("connected to database server");



/*db.collection("Todos").find({
	_id: new ObjectID ("5998651484e49f057f307fc3")})
.toArray(function(err, docs){
	if(err){return console.log("unable to fetch todos")}
		console.log("Todos")
	console.log(JSON.stringify(docs, undefined, 2))
})*/


/*db.collection("Todos").find()
.count(function(err, count){
	if(err){return console.log("unable to count todos")}
		console.log("Todos count:")
	console.log(count)
})  */

/*db.collection("Todos").find()
.skip(2).toArray(function (err, docs){
	if(err){return err}
    console.log(JSON.stringify(docs, undefined, 2))
})*/

db.collection("Users").find({
	name: "Kristen"
}).toArray(function(err, docs){
	if(err){console.log(err)}
		console.log(JSON.stringify(docs, undefined, 2))
})


db.close();
});