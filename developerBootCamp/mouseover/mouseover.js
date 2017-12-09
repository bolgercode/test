var js = {};
var items= document.querySelectorAll("li");
for(var n = 0; n < items.length; n++){
	items[n].addEventListener("mouseover", function(){this.classList.add("hover");console.log(this);});
	items[n].addEventListener("mouseout", function(){this.classList.remove("hover");console.log(this);});
	items[n].addEventListener("click", function(){this.classList.toggle("done");});
}
