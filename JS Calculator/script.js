var fieldText = "";
var memory = "";
var evaluated = false;

//function keyDet(key, mode) {}

function writeIn(btnText) {
	if (evaluated){
		fieldText="";
		evaluated=false;
	}
	if (fieldText.length===24){
	}
	else {
		var lastChar=fieldText[fieldText.length-1];
		var last2Char=fieldText.substring(fieldText.length-2);
		var strText = btnText.toString();
		if ((lastChar==="+" || lastChar==="*" || lastChar==="/" || lastChar==="-" || lastChar==="%") && (strText==="+" || strText==="*" || strText==="/" || strText==="%"))
			fieldText=fieldText.substring(0, fieldText.length-1);
		else if (lastChar==="-" && strText==="-")
			fieldText=fieldText.substring(0, fieldText.length-1);
		if ((last2Char==="+-" || last2Char==="*-" || last2Char==="/-" || last2Char==="%-") && (strText==="+" || strText==="-" || strText==="*" || strText==="/" || strText==="%")) {} 
		else {
		fieldText+=strText;
		memory=fieldText;
		$(".field").text(fieldText);
		}
	}
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

function operate(num1,num2,op){
	var n1=parseNum(num1);
	var n2=parseNum(num2);
	if (op==="+") {
		return n1+n2;
	}
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
	if (num.indexOf("n")===0 || num.indexOf("-")===0){
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
	var operators =str.replace(/\d|\./g," ");
	operators = operators.replace(/\s{2,}/g, " ");
	operators = operators.replace("*-", "*");
	operators = operators.replace("/-", "/");
	operators = operators.replace("+-", "+");
	operators = operators.replace("%-", "%");
	nums1=nums.split(" ");

	// tests for bad syntax (multiple decimals in one number)
	var numDec=nums1.filter(function(val){
		var pers = val.match(/[.]/g);
		return (pers!=null);
	});

	// a few cases rule out bad syntax
	if (nums.indexOf("  ")>=0 || numDec.length>0)
		$(".field").text("error");
	else if (str[0]==="*" || str[0]==="/" || str[str.length-1]==="+" || str[str.length-1]==="-" || str[str.length-1]==="*" || str[str.length-1]==="/") 
		$(".field").text("error");
	// a case to display the number if only one number is entered
	else if (nums.length===1) {
		$(".field").text(nums);	
		evaluated=true;
	}

	// actual calculation
	else {
		nums=nums.split(" ");
		operators=operators.substring(1,operators.length-1);
		operators = operators.split(" ");
	var opIndMD=0;
	var opIndAS=0;
	var i=0;
	var op="";

	while (i<operators.length){
		var i_m=operators.indexOf("*",opIndMD);
		var i_d=operators.indexOf("/",opIndMD);
		var i_a=operators.indexOf("+",opIndAS);
		var i_s=operators.indexOf("-",opIndAS);
		var i_p=operators.indexOf("%",opIndMD);
		var ind=-1;
		if (i_m>=0 || i_d>=0 || i_p>=0) {
			var opArr=[i_m, i_d, i_p];
			opArr=opArr.filter(function(v){return (v >=0);});
			opIndMD=Math.min.apply(null, opArr);
			ind=opIndMD;
			op = operators[opIndMD];
		}
		else if (i_a>=0 || i_s>=0) {
			var opArr=[i_a, i_s];
			opArr=opArr.filter(function(v){return (v >=0);});
			opIndMD=Math.min.apply(null, opArr);
			ind=opIndAS;
			op = operators[opIndAS];
		}
		var calc=operate(nums[ind], nums[ind+1], op);
		calc=calc.toString();
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
		/*$(".field").on("keypress", function(e){
			var key = */

	}
);
