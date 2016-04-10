var timerOn = false;
var timerPaused = false;
var onBreak = false;
var totalTimerSec = 100;
var breakMin = 5;
var workMin = 25;

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
	$(".clock").text($time);
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
workTimer=setInterval(countDown, 1000);
}

function runBreakTimer(secs) {
	totalTimerSec = secs;
breakTimer=setInterval(countDown, 1000);
}

function pause(){
	// pause clears the intervals. switch timerPaused to false to start over. 
	if (onBreak) clearInterval(breakTimer); 
	else clearInterval(workTimer); 
	timerOn = false; 
	timerPaused = true; 
}

function reset(){ 
	if (timerOn) pause();
       	timerPaused = false; 
	timeToClock(workMin*60);
       	$("#start").text("Start!");
}

$(document).ready(
		function(){
			var workTime = 25;
			// var $workTime = workTime;
			var breakTime = 5;
			// var $breakTime = 5;
			$("#workLength").html(workTime);
			$("#breakLength").html(breakTime);
			timeToClock(workTime*60); 
			$("#workLengthDec").on("click",function(e){
				if (workTime > 1) workTime--;
				$("#workLength").html(workTime);
				workMin = workTime;
				reset(workMin);
			});
			$("#workLengthInc").on("click",function(e){
				workTime++;
				$("#workLength").html(workTime);
				workMin = workTime;
				reset(workMin);
			});
			$("#breakLengthDec").on("click",function(e){
				if (breakTime > 1) breakTime--;
				$("#breakLength").html(breakTime);
					breakMin = breakTime;
				reset();
			});
			$("#breakLengthInc").on("click",function(e){
				breakTime++;
				$("#breakLength").html(breakTime);
					breakMin = breakTime;
				reset();
			});
			$("#start").on("click", function(e){
				if (!timerOn && !timerPaused) {
					getWorkLength(workTime);
					breakMin = breakTime;
					workMin = workTime;
					timerOn = true;
					$("#start").text("Pause");
				}
				else if (!timerOn && timerPaused) {
					if (onBreak) runBreakTimer(totalTimerSec);
					else runWorkTimer(totalTimerSec);
					timerOn = true; 
					timerPaused = false;
					$("#start").text("Pause");
				}
				else if (timerOn && !timerPaused) {
					pause();
					$("#start").text("Continue");
				}
			});
			$("#reset").on("click", function(e){
				if (timerOn) pause();
				timeToClock(workMin*60); 
				$("#start").text("Start!");
			});
		}
		);

