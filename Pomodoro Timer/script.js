var function setTimerLength(){
/*
 * retrieve number of minutes from web page
 * multiply by 60
 * set to totalTimerSec
 */	
	runTimer(totalTimerSec);
}

function setBreaklength(totalBreakSec) {
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
}
function runTimer() {
var timer=setInterval(countDown(), 1000);
}

function stopTimer() {
clearInterval(timer);
}



$(document).ready(function() {


});

