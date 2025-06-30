function countDown(){
var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
	var audio = new Audio('beep.mp3');
	audio.play()
    document.getElementById("countdown").innerHTML = "Recording...";
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);
}
