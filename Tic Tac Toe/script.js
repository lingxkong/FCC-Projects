var state = ["", "", "", "", "", "", "", "", ""];

function isInARow(s){
	if (state[0]===s){
		if ((state[1]===s && state[2]===s) || (state[3]===s && state[6]===s) || (state[4]===s && state[8]===s)) return true;
	}
	else if (state[2]===s){
		if ((state[5]===s && state[8]===s) || (state[4]===s && state[6]===s)) return true;
	}
	else if (state[4]===s){
		if ((state[1]===s && state[7]===s) || (state[3]===s && state[5]===s)) return true;
	}
	else if (state[6]===s && state[7]===s && state[8]===s) return true;
}

function win(){
}

function decideNextMove(s) {
	// determine if 3 in a row can be formed
	if (state[0]==="") {
		if ((state[1]===s && state[2]===s) || (state[3]===s && state[6]===s) || (state[4]===s && state[8]===s)) state[0] = s;
	}
	else if (state[1]==="") {
		if ((state[0]===s && state[2]===s) || (state[4]===s && state[7]===s)) state[1] = s;
	}
	else if (state[2]==="") {
		if ((state[1]===s && state[0]===s) || (state[5]===s && state[8]===s) || (state[4]===s && state[6]===s)) state[2] = s;
	}
	else if (state[3]==="") {
		if ((state[4]===s && state[5]===s) || (state[0]===s && state[6]===s)) state[3] = s;
	}
	else if (state[4]==="") {
		if ((state[1]===s && state[7]===s) || (state[3]===s && state[5]===s) || (state[0]===s && state[8]===s) || (state[2]===s && state[6]===s)) state[4] = s;
	}
	else if (state[5]==="") {
		if ((state[2]===s && state[8]===s) || (state[3]===s && state[4]===s)) state[5] = s;
	}
	else if (state[6]==="") {
		if ((state[0]===s && state[3]===s) || (state[7]===s && state[8]===s) || (state[4]===s && state[2]===s)) state[6] = s;
	}
	else if (state[7]==="") {
		if ((state[1]===s && state[4]===s) || (state[8]===s && state[6]===s)) state[7] = s;
	}
	else if (state[8]==="") {
		if ((state[5]===s && state[2]===s) || (state[7]===s && state[6]===s) || (state[4]===s && state[0]===s)) state[8] = s;
	}
	// find possible forking
	// find other moves
}

function putOnGrids() {
}

function makeAMove() {
}

$(document).ready(
		function(){
			$(".").on("click", function(e){
				var gridID = e.target.id;
			}

		}
		);
