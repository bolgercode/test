//var sureName = prompt("What is your first name?");
//var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");
//console.log("Your full name is: " + sureName + " " + lastName);
//console.log( "You are " + age + " years old" ) ;
if( age < 0 || age > 130){
	console.log("Your age is odd")
}
else if(age < 18){
	console.log("Sorry You are not allowed to enter");
}
else if(age == 21){
	console.log("happy 21st!")
}
else if(age < 21){
	console.log("You are welcome to enter but may not drink")
}
else if(age == "perfect square"){
	console.log("perfect square")
}
else {
	console.log("You are welcome to enter and drink")
}

