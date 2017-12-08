function addToList(){
	var item = prompt("Add Todo" );
	todoList.push(item);
	console.log( item + " was added.")
}
function deleteTodo(){
	var input = prompt("Which Todo do you whant to remove?");
	var id = todoList.indexOf(input);
	if(-1 < id){
		todoList.splice(id,1);
		console.log("deleted: " + input);
	} else {
		for(var n = 0; n < todoList.Length; n++){
			if( input == n){
				todoList.splice(n,1);
				console.log("deleted: " + input);
			}
		}
	}
}
function sumArray(list){
	var sum = 0;
	list.forEach(function(n){sum+=n;});
	return sum;
}

function reverseOrder(list){
	for(var n = 0; n < list.length; n++)
		{console.log(list[list.length-1-n]);
	}
}

function isUniform(list){
	list.forEach(function (n){if(n != list[0]){return false;}});
	return true;
}

function viewList(){
	console.log("*****");
	var string;
	for(var n = 0; n < todoList.length; n++){
		stringReport = n + ": " + todoList[n] ;
		console.log(stringReport);
	}
	//console.log(todoList);
	console.log("*****");
}
function quitOperation(){
	operation = false;
	console.log("YOU QUIT THE APP");
}
var todoList = [];
var request;
var commands = ["new","list", "delete", "quit"];
var operations =[];
operations[commands.indexOf("new")] = addToList;
operations[commands.indexOf("list")] = viewList;
operations[commands.indexOf("delete")] = deleteTodo;
operations[commands.indexOf("quit")] = quitOperation;
var operation = true;
while(operation){
	request = prompt("What to do?");
	operationId = commands.indexOf(request);
	if(-1 != operationId ){
		operations[operationId]();
	}
}