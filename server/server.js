var mongoose = require("mongoose");

//mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model("Todo", {
	text: {
		type:String, 
		required: true,
		minlength:1,
		trim:true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}
});

/*var newTodo = new Todo({
	text:"Cook dinner"})

newTodo.save(function(err, doc){
	if(err){return console.log("anable to save todo")}
		console.log("saved todo", doc)
});  */


/*var anotherTodo = new Todo({
	text:"  some random thing  "
})

anotherTodo.save(function(err, docs){
	if(err){return console.log("unable to make anitherTodo")}
	console.log("saved anotherTodo" + docs)
})
  */
//user
//email require trim set time min lenghtt 1
//create new user
var User = mongoose.model("User", {
	email: {
		type: String,
		required: true,
		minlength: 1
	}
})

var anotherUser = new User({
	email: ""
})

anotherUser.save(function(err, docs){
	if(err){return err}
		console.log("saved anotherUser")
})