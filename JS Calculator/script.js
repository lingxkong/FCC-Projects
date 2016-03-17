var fieldText = "";
var memory = "";
function writeIn(btnText) {
	var strText = btnText.toString();
	fieldText+=strText;
	$(".field").text(fieldText);

}
/*
function checkOperator(btnText){

}

function clear1(){

}
*/

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

			else {
				var val = $("#" + id).text();
				writeIn(val);
			}
		});

	}
);
