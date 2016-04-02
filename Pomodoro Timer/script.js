var onBreak = false;
function getTimerLength(){
/*
 * retrieve number of minutes from web page
 * multiply by 60
 * set to totalTimerSec
 */
	runTimer(totalTimerSec);
}

function getBreaklength(totalBreakSec) {
	runTimer(totalBreakSec);
}

function timeToClock(time) {
	var min = Math.floor(time/60);
	var sec = Math.round(time % 60); 
	var $time = min + " : " + sec;
	$(".clock").text($time);
}

function countDown(totalTimerSec) {
	totalTimerSec-=1;
	timeToClock(totalTimerSec);
	if (totalTimerSec===0 && onBreak===false) {
		stopTimer();
		runBreakTimer();
		onBreak = !(onBreak);
	}
	else if (totalTimerSec===0 && onBreak===true) {
		stopBreakTimer();
		runTimer();
		onBreak = !(onBreak);
	}
}
function runTimer() {
var timer=setInterval(countDown(), 1000);
}

function stopTimer() {
clearInterval(timer);
}


function runBreakTimer() {
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

		}
		);

