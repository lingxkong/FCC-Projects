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

function operate(num1,num2,op){
	var n1=parseNum(num1);
	var n2=parseNum(num2);
	if (op==="+")
		return n1+n2;
	else if (op==="-")
		return n1-n2;
	else if (op==="*")
	return n1*n2;
	else if (op==="/")
	return n1/n2;
	else if (op==="%")
	return n1%n2;	
}
function parseNum(num) {
	if (num.indexOf("n")===0){
		var num = num.substring(1);
		var neg=true;
	}
	if (num.indexOf(".")>=0)
		n=parseFloat(num);
	else 
		n=parseInt(num);
	if (neg)
		n=-1*n;
	return n;
}

function equals(str){
	if (str[0]==="+" || str[0]==="-")
		str="0"+str;
	var nums = str.replace(/[+*%\/][-]/g," n");
	nums = nums.replace(/[-+*%\/]/g," ");
	var operators = str.replace(/\d|\./g," ");
	operators = operators.replace(/\s{2,}/g, " ");
	nums=nums.split(" ");
	
	var numDec=nums.filter(function(val){
		var pers = val.match(/[.]/g);
		return (pers!=null);
	});
	if (nums.indexOf("  ")>=0 || numDec.length>0)
		$(".field").text("error");
	else if (str[0]==="*" || str[0]==="/" || str[str.length-1]==="+" || str[str.length-1]==="-" || str[str.length-1]==="*" || str[str.length-1]==="/") 
		$(".field").text("error");
	else {
		if (operators.length>1)
			operators = operators.split(" ");
	var opIndMD=-1;
	var opIndAS=-1;
	var i=0;
	var op="";
	while (i<operators.length){
		var i_m=operators.indexOf("*",opIndMD);
		var i_d=operators.indexOf("/",opIndMD);
		var i_a=operators.indexOf("+",opIndAS);
		var i_s=operators.indexOf("-",opIndAS);
		var ind=-1;
		if (i_m>0 && i_d>0) {
			opIndMD=Math.min(i_m,i_d);
			ind=opIndMD;
			op = operators[opIndMD];
		}
		else if (i_m>0 || i_m>0) {
			opIndMD=Math.max(i_m,i_d);
			ind=opIndMD;
			op = operators[opIndMD];
		}
		else if (i_a>0 && i_s>0) {
			opIndAS=Math.min(i_a,i_s);
			ind=opIndAS;
			op = operators[opIndAS];
		}
		else if (i_m>0 || i_m>0) {
			opIndAS=Math.max(i_m,i_d);
			ind=opIndAS;
			op = operators[opIndAS];
		}
		console.log(ind);
		console.log(operators);
		var calc=operate(nums[ind], nums[ind+1], op);
		nums.splice(ind,2);
		nums.splice(ind,0,calc);
		operators.splice(ind,1);
	}



	evaluated=true;
	$(".field").text(nums[0]);
	}
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
