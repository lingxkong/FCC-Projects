var fieldText = "";

function writeIn(btnText) {
	var strText = btnText.toString();
	fieldText+=strText;
	console.log(fieldText);
	$(".field").text(fieldText);

}

$(document).ready(
	function() {
		$("#n7").on("click", function(e){
			var val = 7;
			writeIn(val);
		});

	}
);
