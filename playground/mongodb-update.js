

var {MongoClient, ObjectID} = require("mongodb");




MongoClient.connect("mongodb://localhost:27017/TodoApp", 
	function(err, db){
if(err){return console.log("there was an error connecting to database server")}
	console.log("connected to database server");



db.collection("Todos").findOneAndUpdate({
	_id: new ObjectID("599894686e34040884cba88e"),
},{
	$set: {completed: true}
}, {returnOriginal: false},
function(err, result){
	if(err){return err}
		console.log(result)
})

//change name of user lisa to kristen
//incriment age by 1
db.collection("Users").findOneAndUpdate({
	name: "Lisa"
}, { $set: {name: "Kristen"}, $inc: {age: 1}},
{returnOriginal: false}, 
function(err, result){
	if(err){return err}
		console.log(result)
})

//db.close();
});