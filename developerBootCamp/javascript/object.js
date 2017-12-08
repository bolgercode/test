var movies = [
{
	title:"The General",
	rating: 5,
	watched: true,
},
{
	title:"The Dictator",
	rating: 5,
	watched: true,
},
{
	title:"7 Samuraj",
	rating: 5,
	watched: false,
},
];

movies.forEach(function(a){
	var reply = "You have not seen ";
	if(a.watched){reply = "You have watched ";}
	console.log(reply + a.title + " - " + a.rating + " stars");
});

/*
movies.forEach(function(this){
	var reply = "You have not seen ";
	if(this.watched){reply = "You have watched ";}
	console.log(reply + this.title + " - " + this.rating + " stars");
})*/