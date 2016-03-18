var fieldText = "";
var memory = "";
var evaluated = false;
function writeIn(btnText) {
	if (evaluated){
		fieldText="";
		evaluated=false;
	}
	var strText = btnText.toString();
	fieldText+=strText;
	memory=fieldText;
	$(".field").text(fieldText);
}

function clear1(){
	evaluated = false;
	memory=memory.split("");
	memory.pop();
	memory=memory.join("");
	fieldText=memory;
	$(".field").text(fieldText);
}

function allClear(){
	evaluated=false;
	fieldText = "";
	$(".field").text(fieldText);
	memory = "";
}

/*
function ans(){

}
*/ 

function parseOperators(btnText){

}

function equals(str){
	var nums = str.replace(/[+*%\/][-]/g," n");
	nums = nums.replace(/[-+*%\/]/g," ");
	if (nums.indexOf("  ")>=0)
		$(".field").text("error");
	var operators = str.replace(/\d|\./g," ");
	operators = operators.replace(/\s{2,}/g, " ");
	evaluated=true;
}

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
			else if (id==="equals") {
				equals(fieldText);
			}
			else {
				var val = $("#" + id).text();
				writeIn(val);
			}
		});

	}
);
