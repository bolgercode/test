var secretNumber = 4;
var guess = Number(prompt("Guess a Number: "));
console.log(guess);
if(guess === secretNumber){
	console.log("Right");
}
else if(guess> secretNumber){
	console.log("Wrong, Too high!!");
}
else{
	console.log("Wrong, Too low");
}

count = 0;
while( count++ < 10){
	console.log(count);
}