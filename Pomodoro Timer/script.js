var onBreak = false;
var totalTimerSec = 100;
var breakMin = 0;
var workMin = 0;

function getWorkLength(workMin){
/*
 * retrieve number of minutes from web page
 * multiply by 60
 * set to totalTimerSec
 */
	totalTimerSec=workMin*60;
	runWorkTimer(totalTimerSec);
}

function getBreakLength(breakMin) {
	runBreakTimer(breakMin*60);
}

function timeToClock(time) {
	var min = Math.floor(time/60);
	var sec = Math.round(time % 60); 
	sec=sec.toString();
	if (sec.length==1) sec= "0" + sec;
	var $time = min + " : " + sec;
	$("#start").text($time);
}

function countDown() {
	totalTimerSec--;
	timeToClock(totalTimerSec);
	if (totalTimerSec===0 && onBreak===false) {
		clearInterval(workTimer);
		getBreakLength(breakMin);
		onBreak = !(onBreak);
	}
	else if (totalTimerSec===0 && onBreak===true) {
		clearInterval(breakTimer);
		getWorkLength(workMin);
		onBreak = !(onBreak);
	}
}
function runWorkTimer(secs) {
	totalTimerSec = secs;
workTimer=setInterval(countDown, 1000); //id not reachable by countDown()
}

function runBreakTimer(secs) {
	totalTimerSec = secs;
breakTimer=setInterval(countDown, 1000);
}

$(document).ready(
		function(){
			var workTime = 25;
			// var $workTime = workTime;
			var breakTime = 5;
			// var $breakTime = 5;
			$("#workLength").html(workTime);
			$("#breakLength").html(breakTime);
			$("#workLengthDec").on("click",function(e){
				if (workTime > 1) workTime--;
				$("#workLength").html(workTime);
			});
			$("#workLengthInc").on("click",function(e){
				workTime++;
				$("#workLength").html(workTime);
			});
			$("#breakLengthDec").on("click",function(e){
				if (breakTime > 1) breakTime--;
				$("#breakLength").html(breakTime);
			});
			$("#breakLengthInc").on("click",function(e){
				breakTime++;
				$("#breakLength").html(breakTime);
			});
			$("#start").on("click", function(e){
				getWorkLength(workTime);
				breakMin = breakTime;
				workMin = workTime;
			});
		}
		);

