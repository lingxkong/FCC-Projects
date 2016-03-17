var fieldText = "";
var memory = "";
function writeIn(btnText) {
	var strText = btnText.toString();
	fieldText+=strText;
	memory=fieldText;
	$(".field").text(fieldText);

}
/*
function checkOperator(btnText){

}
*/ 
function clear1(){

	console.log(memory);
	memory=memory.split("");

	console.log(memory);
	memory.pop();
	console.log(memory);
	memory=memory.join("");
	fieldText=memory;
	$(".field").text(fieldText);
}

function allClear(){
	fieldText = "";
	$(".field").text(fieldText);
	memory = "";
}

/*
function ans(){

}

function equals(str){

}
*/

$(document).ready(
	function() {
		$("button").click(function(e){
			var id = e.target.id; 
			if (id==="AC"){
				allClear();
			}
			else if (id==="CE") {
				clear1();
			}
			else {
				var val = $("#" + id).text();
				writeIn(val);
			}
		});

	}
);
