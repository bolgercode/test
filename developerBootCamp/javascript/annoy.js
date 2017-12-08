String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};
var areWeThere = false;
var answer;
var pattern = new RegExp("yes");
var pattern2 = new RegExp("yeah");
while(!areWeThere){
	answer = prompt("Are we there yet??");
	console.log(answer);
	areWeThere = pattern.test(answer) || pattern2.test(answer);
}
alert("Huuray!!")