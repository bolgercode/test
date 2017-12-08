var numsquares = 6;
var headColor = "steelblue"
var colors = generateRandomColors(numsquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyButton= document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

h1.style.backgroundColor= headColor;

resetButton.addEventListener("click",function(){
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var n=0; n < squares.length; n++){
		squares[n].style.backgroundColor = colors[n];
	}
	messageDisplay.textContent= "";
})

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numsquares = 3;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var n  = 0; n < squares.length; n++){
		if(colors[n]){
			squares[n].style.color = colors[n];
			squares[n].style.display = "block";
		} else {
			squares[n].style.display = "none";
		}
	}
	h1.style.backgroundColor= headColor;
	messageDisplay.textContent= "";
})

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numsquares = 6;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var n  = 0; n < squares.length; n++){
		if(colors[n]){
			squares[n].style.color = colors[n];
			squares[n].style.display = "block";
		} else {
			squares[n].style.display = "none";
		}
	}
	h1.style.backgroundColor= headColor;
	messageDisplay.textContent= "";
})

function win(){
	messageDisplay.textContent= "Correct" ;
	changeColors(pickedColor);
	h1.style.backgroundColor= pickedColor;
}

function changeColors(color){
	for(var n= 0;n<squares.length;n++){
		squares[n].style.backgroundColor = color;
	}
}

colorDisplay.textContent = pickedColor;

for(var n=0; n < squares.length; n++){
	squares[n].style.backgroundColor = colors[n];
	squares[n].addEventListener("click",function () {
		console.log(this.style.backgroundColor);
		if(pickedColor === this.style.backgroundColor){
			win();
		} else {
			this.style.backgroundColor = headColor;
			messageDisplay.textContent= "Try Again" ;
		}
	})
}

 function pickColor(){
 	var id = Math.floor(Math.random()*colors.length);
 	return colors[id];
 }

 function generateRandomColors(num){
 	var arr = [];
 	for(var n=0; n<num; n++){
 		arr[n] = randomColor();
 	}
 	return arr;
 }

 function randomColor(){
 	var red = Math.floor(Math.random()*256);
 	var blue = Math.floor(Math.random()*256);
 	var green = Math.floor(Math.random()*256);
 	return "rgb(" + red + ", " + green + ", " + blue +")";
 }