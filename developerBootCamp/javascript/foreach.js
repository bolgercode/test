alert("hello");
var arr =[45,65,77,34];
var colors=["red","green","blue"];

function mfe(arr ,func) {
	for(var i = 0; i <arr.length; i++){
		func(arr[i]);
	}
}

function myForEach( nums , func ){
	for(var n = 0; n < nums.length; n++){
		func(nums[n]);
	}
}

