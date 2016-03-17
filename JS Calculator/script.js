var fieldText = "";

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

function allClear(){

}

function ans(){

}

function equals(str){

}
*/

$(document).ready(
	function() {
		$("button").click(function(e){
			var id = e.target.id; 
			console.log(id);
			var val = $("#" + id).text();
			writeIn(val);
		});

	}
);
