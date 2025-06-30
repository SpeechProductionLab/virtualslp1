//	Simple example of using private variables
//
//	To start the stopwatch:
//		obj.start();
//
//	To get the duration in milliseconds without pausing / resuming:
//		var	x = obj.time();
//
//	To pause the stopwatch:
//		var	x = obj.stop();	// Result is duration in milliseconds
//
//	To resume a paused stopwatch
//		var	x = obj.start();	// Result is duration in milliseconds
//
//	To reset a paused stopwatch
//		obj.stop();
//
var	clsStopwatchAudio = function() {
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

		var	now	= function() {
				return (new Date()).getTime(); 
			}; 

		// Public methods
		// Start or resume
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};

		// Stop or pause
		this.stop = function() {
				// If running, update elapsed time otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};

		// Reset
		this.reset = function() {
				lapTime = startAt = 0;
			};

		// Duration
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};

var x = new clsStopwatchAudio();
var $timeAudio;
var clocktimer;

function padAudio(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTimeAudio(time) {
	var m = s = 0;
	var newTime = '';

	// h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	// ms = time % 1000;

	newTime = padAudio(m, 2) + ':' + padAudio(s, 2);
	return newTime;
}

function showAudio() {
	$timeAudio = document.getElementById('timeAudio');
	updateAudio();
}

function updateAudio() {
	$timeAudio.innerHTML = formatTimeAudio(x.time());
}

function startAudio() {
	clocktimer = setInterval("updateAudio()", 1);
	x.start();
}

function stopAudio() {
	x.stop();
	clearInterval(clocktimer);
}

function resetAudio() {
	stopAudio();
	x.reset();
	updateAudio();
}