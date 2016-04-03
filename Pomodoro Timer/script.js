var onBreak = false;
var totalTimerSec = 100;
var breakMin = 0;

function getWorkLength(workMin){
/*
 * retrieve number of minutes from web page
 * multiply by 60
 * set to totalTimerSec
 */
	totalTimerSec=workMin*60;
	runWorkTimer(totalTimerSec);
}

function getBreaklength(breakMin) {
	runBreakTimer(breakMin*60);
}

function timeToClock(time) {
	var min = Math.floor(time/60);
	var sec = Math.round(time % 60); 
	var $time = min + " : " + sec;
	$(".clock").text($time);
}

function countDown() {
	totalTimerSec--;
	timeToClock(totalTimerSec);
	if (totalTimerSec===0 && onBreak===false) {
		stopTimer();
		runBreakTimer();
		onBreak = !(onBreak);
	}
	else if (totalTimerSec===0 && onBreak===true) {
		stopBreakTimer();
		runWorkTimer();
		onBreak = !(onBreak);
	}
}
function runWorkTimer(secs) {
	totalTimerSec = secs;
var workTimer=setInterval(countDown(), 1000);
}

function stopTimer() {
clearInterval(workTimer);
}


function runBreakTimer(secs) {
	totalTimerSec = secs;
var breakTimer=setInterval(countDown(), 1000);
}

function stopBreakTimer() {
clearInterval(breakTimer);
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
				workTime--;
				$("#workLength").html(workTime);
			});
			$("#workLengthInc").on("click",function(e){
				workTime++;
				$("#workLength").html(workTime);
			});
			$("#breakLengthDec").on("click",function(e){
				breakTime--;
				$("#breakLength").html(breakTime);
			});
			$("#breakLengthInc").on("click",function(e){
				breakTime++;
				$("#breakLength").html(breakTime);
			});
			$("#start").on("click", function(e){
				getTimerLength(workTime);
				breakMin = breakTime;
				workMin = workTime;
			});
		}
		);

