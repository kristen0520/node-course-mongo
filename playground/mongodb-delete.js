//var MongoClient = require("mongodb").MongoClient;

var {MongoClient, ObjectID} = require("mongodb");



MongoClient.connect("mongodb://localhost:27017/TodoApp", 
	function(err, db){
if(err){return console.log("there was an error connecting to database server")}
	console.log("connected to database server");


//delteMany
/*db.collection("Todos").deleteMany({
	text: "brush teeth"
}, function(err, result){
	if(err){return err}
		console.log(result)
})  */
//deleteOne
/*db.collection("Todos").deleteOne({text:"sleep"}, 
	function(err, result){
		if(err){return err}
	console.log(result)
	})*/
//findOneAndDelete
/*db.collection("Todos").findOneAndDelete({completed: false}, 
	function(err, result){
		if(err){return err}
	console.log(result)
	})*/

//look for duplicates, delte many

/*db.collection("Users").deleteMany({name: "Kristen"}, 
	function(err, result){
		if(err){return err}
			console.log(result)
	})*/
//find one and delte something else by id
db.collection("Users").findOneAndDelete({_id: new ObjectID("599861bf42c20d0b84ffbdbf")},
	function (err, result){
		if(err){return err}
			console.log(result)
	})

//db.close();
});