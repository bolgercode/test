
var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
	if(isBlue){
		body.style.background = "white";
	} else {
		body.style.background = "#3498db" ;
	}
	isBlue = !isBlue;
},100000);


var tag = document.getElementById("highlight");
console.log(tag);

var tags = document.getElementsByClassName("myBolded");
console.log(tags[0]);
