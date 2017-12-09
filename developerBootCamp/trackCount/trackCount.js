var players = [player1,player2];
var game = {
	status: "running",
	limit: 5,
	score: [0, 0]
}
function ScoreTrack(thisGame,id){
	if("running" == thisGame.status){
		if(++thisGame.score[id]>= game.limit){
			thisGame.status = "finished"
		}
	}
	return;
}

function Update(){
	game.score1.textContent = game.score[0];
	if(game.score[0] >= game.limit){
		game.score1.classList.add("winner");
	}else{
		game.score1.classList.remove("winner");
	}
	game.score2.textContent = game.score[1];
	if(game.score[1] >= game.limit){
		game.score2.classList.add("winner");
	}else{
		game.score2.classList.remove("winner");
	}	
	document.querySelector("#limit").textContent = "Playing to: " + game.limit;
}

function Reset(){
	game.score[0] = 0;
	game.score[1] = 0;
	Update();
	game.status = "running";
}

game.buttonP1 = document.querySelector("#player1");
game.buttonP2 = document.querySelector("#player2");
game.buttonReset = document.querySelector("#reset");
game.input = document.querySelector("input");

game.score1 = document.querySelector("#p1display");
game.score2 = document.querySelector("#p2display");
game.buttonP1.addEventListener("click",function(){ScoreTrack(game,0);Update();});
game.buttonP2.addEventListener("click",function(){ScoreTrack(game,1);Update();});
game.buttonReset.addEventListener("click",function(){Reset();});
game.input.addEventListener("change",function(){game.limit = Number(game.input.value);Update();})