/* Script by Saeid Alavi Naeini, saeid.alavi@mail.utoronto.ca, 2021 */
// setting size of tabs based on screen size
/*
document.getElementById("dude").style.height = screen.availHeight * 0.7;
document.getElementById("dude-left").style.height = screen.availHeight * 0.7;
document.getElementById("dude-right").style.height = screen.availHeight * 0.7;

document.getElementById("dude").style.width = screen.availWidth;
document.getElementById("dude-left").style.width = screen.availWidth * 0.12;
document.getElementById("dude-right").style.width = screen.availWidth * 0.12;
*/
 
// $('.appear-video1').append($('.disappear-video'));
// appearVideo1 = document.getElementById('appear-video1');
//appearVideo2 = document.getElementById('appear-video2');
// disappearVideo1 = document.getElementById('disappear-video');
//disappearVideo2 = document.getElementById('disappear-video');
// appearVideo1.appendChild(disappearVideo1);
//appearVideo2.appendChild(disappearVideo2);
//task1 instructions button behaviour
// var task1 = $('#task1-instruction');
// var task1Button = $('.task1-button');
// var nextButton = document.getElementById("nextBtn5");
// task1Button.on('click', function(){
// 	if (task1.paused){
// 		task1.play();
// 		task1Button.removeAttr('id');
// 		task1Button.attr('id', 'pauseBtn');
// 	}else{
// 		task1.pause();
// 		task1Button.removeAttr('id');
// 		task1Button.attr('id', 'readBtn');
// 	}
// });
// task1.on('ended', function(){
// 	task1Button.removeAttr('id');
// 	task1Button.attr('id', 'readBtn');
// 	task1.currentTime = 0;
// 	nextButton.disabled = false;
// 	nextButton.style.opacity = 1;
// });
// end of task1 instructions button behaviour
//task2 instructions button behaviour
/*
var task2 = $('#task2-instruction')[0];
$('.task2-button').on('click', function(){
	if (task2.paused){
		task2.play();
		$('.task2-button').removeAttr('id');
		$('.task2-button').attr('id', 'pauseBtn');
	}else{
		task2.pause();
		$('.task2-button').removeAttr('id');
		$('.task2-button').attr('id', 'readBtn');
	}
});
$('#task2-instruction').on('ended', function(){
	$('.task2-button').removeAttr('id');
	$('.task2-button').attr('id', 'readBtn');
	task2.currentTime = 0;
	document.getElementById("nextBtn7").disabled = false;
	document.getElementById("nextBtn7").style.opacity = 1;
});
*/

// canvas grid
var c_canvas = document.getElementById("c");
var context = c_canvas.getContext("2d");

context.moveTo(0, 0);
context.lineTo(0, 500);

context.moveTo(500, 0);
context.lineTo(500, 500);

context.moveTo(0, 0);
context.lineTo(500, 0);

context.moveTo(0, 500);
context.lineTo(500, 500);

context.moveTo(100, 0);
context.lineTo(100, 500);

context.moveTo(400, 0);
context.lineTo(400, 500);

context.moveTo(0, 50);
context.lineTo(500, 50);

context.moveTo(0, 450);
context.lineTo(500, 450);

context.strokeStyle = "#FF00FF";
context.lineWidth = 4;
context.stroke();
// end of canvas grid

//start of sample canvas grid
var c_canvas_sample = document.getElementById("c-sample");
var context_sample = c_canvas_sample.getContext("2d");

context_sample.moveTo(0, 0);
context_sample.lineTo(0, 500);

context_sample.moveTo(500, 0);
context_sample.lineTo(500, 500);

context_sample.moveTo(0, 0);
context_sample.lineTo(500, 0);

context_sample.moveTo(0, 500);
context_sample.lineTo(500, 500);

context_sample.moveTo(100, 0);
context_sample.lineTo(100, 500);

context_sample.moveTo(400, 0);
context_sample.lineTo(400, 500);

context_sample.moveTo(0, 50);
context_sample.lineTo(500, 50);

context_sample.moveTo(0, 450);
context_sample.lineTo(500, 450);

context_sample.strokeStyle = "#FF00FF";
context_sample.lineWidth = 4;
context_sample.stroke();
// end of sample canvas grid

//start of sample1 canvas grid
var c_canvas_sample1 = document.getElementById("c-sample1");
var context_sample1 = c_canvas_sample1.getContext("2d");

context_sample1.moveTo(0, 0);
context_sample1.lineTo(0, 500);

context_sample1.moveTo(500, 0);
context_sample1.lineTo(500, 500);

context_sample1.moveTo(0, 0);
context_sample1.lineTo(500, 0);

context_sample1.moveTo(0, 500);
context_sample1.lineTo(500, 500);

context_sample1.moveTo(100, 0);
context_sample1.lineTo(100, 500);

context_sample1.moveTo(400, 0);
context_sample1.lineTo(400, 500);

context_sample1.moveTo(0, 50);
context_sample1.lineTo(500, 50);

context_sample1.moveTo(0, 450);
context_sample1.lineTo(500, 450);

context_sample1.strokeStyle = "#FF00FF";
context_sample1.lineWidth = 4;
context_sample1.stroke();
// end of sample1 canvas grid

//start of sample2 canvas grid
// var c_canvas_sample2 = document.getElementById("c-sample2");
// var context_sample2 = c_canvas_sample2.getContext("2d");

// context_sample2.moveTo(0, 0);
// context_sample2.lineTo(0, 500);

// context_sample2.moveTo(500, 0);
// context_sample2.lineTo(500, 500);

// context_sample2.moveTo(0, 0);
// context_sample2.lineTo(500, 0);

// context_sample2.moveTo(0, 500);
// context_sample2.lineTo(500, 500);

// context_sample2.moveTo(100, 0);
// context_sample2.lineTo(100, 500);

// context_sample2.moveTo(400, 0);
// context_sample2.lineTo(400, 500);

// context_sample2.moveTo(0, 50);
// context_sample2.lineTo(500, 50);

// context_sample2.moveTo(0, 450);
// context_sample2.lineTo(500, 450);

// context_sample2.strokeStyle = "#FF00FF";
// context_sample2.lineWidth = 4;
// context_sample2.stroke();
// end of sample2 canvas grid

//start of sample3 canvas grid
var c_canvas_sample3 = document.getElementById("c-sample3");
var context_sample3 = c_canvas_sample3.getContext("2d");

context_sample3.moveTo(0, 0);
context_sample3.lineTo(0, 500);

context_sample3.moveTo(500, 0);
context_sample3.lineTo(500, 500);

context_sample3.moveTo(0, 0);
context_sample3.lineTo(500, 0);

context_sample3.moveTo(0, 500);
context_sample3.lineTo(500, 500);

context_sample3.moveTo(100, 0);
context_sample3.lineTo(100, 500);

context_sample3.moveTo(400, 0);
context_sample3.lineTo(400, 500);

context_sample3.moveTo(0, 50);
context_sample3.lineTo(500, 50);

context_sample3.moveTo(0, 450);
context_sample3.lineTo(500, 450);

context_sample3.strokeStyle = "#FF00FF";
context_sample3.lineWidth = 4;
context_sample3.stroke();
// end of sample3 canvas grid

//start of sample4 canvas grid
var c_canvas_sample4 = document.getElementById("c-sample4");
var context_sample4 = c_canvas_sample4.getContext("2d");

context_sample4.moveTo(0, 0);
context_sample4.lineTo(0, 500);

context_sample4.moveTo(500, 0);
context_sample4.lineTo(500, 500);

context_sample4.moveTo(0, 0);
context_sample4.lineTo(500, 0);

context_sample4.moveTo(0, 500);
context_sample4.lineTo(500, 500);

context_sample4.moveTo(100, 0);
context_sample4.lineTo(100, 500);

context_sample4.moveTo(400, 0);
context_sample4.lineTo(400, 500);

context_sample4.moveTo(0, 50);
context_sample4.lineTo(500, 50);

context_sample4.moveTo(0, 450);
context_sample4.lineTo(500, 450);

context_sample4.strokeStyle = "#FF00FF";
context_sample4.lineWidth = 4;
context_sample4.stroke();
// end of sample4 canvas grid

//start of sample5 canvas grid
var c_canvas_sample5 = document.getElementById("c-sample5");
var context_sample5 = c_canvas_sample5.getContext("2d");

context_sample5.moveTo(0, 0);
context_sample5.lineTo(0, 500);

context_sample5.moveTo(500, 0);
context_sample5.lineTo(500, 500);

context_sample5.moveTo(0, 0);
context_sample5.lineTo(500, 0);

context_sample5.moveTo(0, 500);
context_sample5.lineTo(500, 500);

context_sample5.moveTo(100, 0);
context_sample5.lineTo(100, 500);

context_sample5.moveTo(400, 0);
context_sample5.lineTo(400, 500);

context_sample5.moveTo(0, 50);
context_sample5.lineTo(500, 50);

context_sample5.moveTo(0, 450);
context_sample5.lineTo(500, 450);

context_sample5.strokeStyle = "#FF00FF";
context_sample5.lineWidth = 4;
context_sample5.stroke();
// end of sample4 canvas grid

// end of task2 instructions button behaviour
//task3 instructions button behaviour
var task1 = document.getElementById('task1-instruction');
var task2 = document.getElementById('task2-instruction');
var task3 = document.getElementById('task3-instruction');
var task4 = document.getElementById('task4-instruction');
var task5 = document.getElementById('task5-instruction');
var task6 = document.getElementById('task6-instruction');
var task7 = document.getElementById('task7-instruction');
var task8 = document.getElementById('task8-instruction');
var task9 = document.getElementById('task9-instruction');
var task10 = document.getElementById('task10-instruction');
var task11 = document.getElementById('task11-instruction');
var task12 = document.getElementById('task12-instruction');
var task13 = document.getElementById('task13-instruction');
var task14 = document.getElementById('task14-instruction');
var task15 = document.getElementById('task15-instruction');
var task16 = document.getElementById('task16-instruction');
var task17 = document.getElementById('task17-instruction');
var task18 = document.getElementById('task18-instruction');
var task19 = document.getElementById('task19-instruction');
var task20 = document.getElementById('task20-instruction');
var task21 = document.getElementById('task21-instruction');
var task22 = document.getElementById('task22-instruction');
var task23 = document.getElementById('task23-instruction');
var task24 = document.getElementById('task24-instruction');
var task25 = document.getElementById('task25-instruction');
var task26 = document.getElementById('task26-instruction');
var task27 = document.getElementById('task27-instruction');
var task28 = document.getElementById('task28-instruction');
var task29 = document.getElementById('task29-instruction');
var task30 = document.getElementById('task30-instruction');
var task31 = document.getElementById('task31-instruction');
var task32 = document.getElementById('task32-instruction');
var task33 = document.getElementById('task33-instruction');

var button1 = document.getElementById('readBtn1');
var button2 = document.getElementById('readBtn2');
var button3 = document.getElementById('readBtn3');
var button4 = document.getElementById('readBtn4');
var button5 = document.getElementById('readBtn5');
var button6 = document.getElementById('readBtn6');
var button7 = document.getElementById('readBtn7');
var button8 = document.getElementById('readBtn8');
var button9 = document.getElementById('readBtn9');
var button10 = document.getElementById('readBtn10');
var button11 = document.getElementById('readBtn11');
var button12 = document.getElementById('readBtn12');
var button13 = $('.task13-button');
var button14 = document.getElementById('readBtn14');
var button15 = document.getElementById('readBtn15');
var button16 = document.getElementById('readBtn16');
var button17 = $('.task17-button');
var button18 = document.getElementById('readBtn18');
var button19 = $('.task19-button');
var button20 = document.getElementById('readBtn20');
var button21 = document.getElementById('readBtn21');
var button22 = document.getElementById('readBtn22');
var button23 = document.getElementById('readBtn23');
var button24 = document.getElementById('readBtn24');
var button25 = document.getElementById('readBtn25');
var button26 = document.getElementById('readBtn26');
var button27 = document.getElementById('readBtn27');
var button28 = document.getElementById('readBtn28');
var button29 = document.getElementById('readBtn29');
var button30 = document.getElementById('readBtn30');
var button31 = document.getElementById('readBtn31');
var button32 = document.getElementById('readBtn32');
var button33 = document.getElementById('readBtn33');
/*
function instructionsButton(taskSpecified, buttonClass, nextClass) {
	buttonClass.addEventListener('click', function(){
		taskSpecified.play();
		buttonClass.style.display = 'none';
		//buttonClass.setAttribute('id', 'pauseBtn');
	});
	taskSpecified.addEventListener('ended', function(){
		//buttonClass.removeAttribute('id');
		//buttonClass.setAttribute('id', 'readBtn');
		buttonClass.style.display = 'block';
		taskSpecified.currentTime = 0;
		document.getElementById(nextClass).disabled = false;
		document.getElementById(nextClass).style.opacity = 1;
	});
}
*/

//task1 instruction

function instruction1Play() {
	task1.play();
	button1.style.display = "none";
}
task1.addEventListener('ended', function(){
	button1.style.display = "block";
	document.getElementById("nextBtn7").disabled = false;
	document.getElementById("nextBtn7").style.opacity = 1;
});

//task2 instruction

function instruction2Play() {
	task2.play();
	button2.style.display = "none";
}
task2.addEventListener('ended', function(){
	button2.style.display = "block";
	document.getElementById("nextBtn9").disabled = false;
	document.getElementById("nextBtn9").style.opacity = 1;
});

//task3 instruction

function instruction3Play() {
	task3.play();
	button3.style.display = "none";
}
task3.addEventListener('ended', function(){
	button3.style.display = "block";
	document.getElementById("nextBtn11").disabled = false;
	document.getElementById("nextBtn11").style.opacity = 1;
});
// end of task3 instructions button behaviour
//task4 instruction

function instruction4Play() {
	task4.play();
	button4.style.display = "none";
}
task4.addEventListener('ended', function(){
	button4.style.display = "block";
	document.getElementById("nextBtn13").disabled = false;
	document.getElementById("nextBtn13").style.opacity = 1;
});
// end of task4 instructions button behaviour
//task5 instruction

function instruction5Play() {
	task5.play();
	button5.style.display = "none";
}
task5.addEventListener('ended', function(){
	button5.style.display = "block";
	document.getElementById("nextBtn15").disabled = false;
	document.getElementById("nextBtn15").style.opacity = 1;
});
// end of task5 instructions button behaviour
//task6 instruction

function instruction6Play() {
	task6.play();
	button6.style.display = "none";
}
task6.addEventListener('ended', function(){
	button6.style.display = "block";
	document.getElementById("nextBtn17").disabled = false;
	document.getElementById("nextBtn17").style.opacity = 1;
});
// end of task6 instructions button behaviour
//task7 instruction

function instruction7Play() {
	task7.play();
	button7.style.display = "none";
}
task7.addEventListener('ended', function(){
	button7.style.display = "block";
	document.getElementById("nextBtn20").disabled = false;
	document.getElementById("nextBtn20").style.opacity = 1;
});
// end of task7 instructions button behaviour
//task8 instruction

function instruction8Play() {
	task8.play();
	button8.style.display = "none";
}
task8.addEventListener('ended', function(){
	button8.style.display = "block";
	document.getElementById("nextBtn23").disabled = false;
	document.getElementById("nextBtn23").style.opacity = 1;
});
// end of task8 instructions button behaviour
//task9 instruction

function instruction9Play() {
	task9.play();
	button9.style.display = "none";
}
task9.addEventListener('ended', function(){
	button9.style.display = "block";
	document.getElementById("nextBtn25").disabled = false;
	document.getElementById("nextBtn25").style.opacity = 1;
});
// end of task9 instructions button behaviour
//task10 instruction

function instruction10Play() {
	task10.play();
	button10.style.display = "none";
}
task10.addEventListener('ended', function(){
	button10.style.display = "block";
	document.getElementById("nextBtn27").disabled = false;
	document.getElementById("nextBtn27").style.opacity = 1;
});
// end of task10 instructions button behaviour
//task11 instruction

function instruction11Play() {
	task11.play();
	button11.style.display = "none";
}
task11.addEventListener('ended', function(){
	button11.style.display = "block";
	document.getElementById("nextBtn29").disabled = false;
	document.getElementById("nextBtn29").style.opacity = 1;
});
// end of task11 instructions button behaviour
//task12 instruction

function instruction12Play() {
	task12.play();
	button12.style.display = "none";
}
task12.addEventListener('ended', function(){
	button12.style.display = "block";
	document.getElementById("nextBtn31").disabled = false;
	document.getElementById("nextBtn31").style.opacity = 1;
});
// end of task12 instructions button behaviour
//task13 instruction
/*
function instruction13Play() {
	setTimeout(function () {
		task13.play();
	}, 1500);
	//button1.style.display = "none";
}
task13.addEventListener('ended', function () {
	//button1.style.display = "block";
	document.getElementById("nextBtn34").disabled = false;
	document.getElementById("nextBtn34").style.opacity = 1;
});
*/

function instruction13Play(){
	if (task13.paused){
		task13.play();
		button13.removeAttr('id');
		button13.attr('id', 'pauseBtn13');
	}else{
		task13.pause();
		button13.removeAttr('id');
		button13.attr('id', 'readBtn13');
	}
}
task13.addEventListener('ended', function(){
	button13.removeAttr('id');
	button13.attr('id', 'readBtn13');
	task13.currentTime = 0;
	document.getElementById("nextBtn34").disabled = false;
	document.getElementById("nextBtn34").style.opacity = 1;
});
// end of task13 instructions button behaviour
//task14 instruction

function instruction14Play() {
	task14.play();
	button14.style.display = "none";
}
task14.addEventListener('ended', function(){
	button14.style.display = "block";
	document.getElementById("nextBtn36").disabled = false;
	document.getElementById("nextBtn36").style.opacity = 1;
});
// end of task14 instructions button behaviour
//task15 instruction

function instruction15Play() {
	task15.play();
	button15.style.display = "none";
}
task15.addEventListener('ended', function(){
	button15.style.display = "block";
	document.getElementById("nextBtn38").disabled = false;
	document.getElementById("nextBtn38").style.opacity = 1;
});
// end of task15 instructions button behaviour
//task16 instruction

function instruction16Play() {
	task16.play();
	button16.style.display = "none";
}
task16.addEventListener('ended', function(){
	button16.style.display = "block";
	document.getElementById("nextBtn40").disabled = false;
	document.getElementById("nextBtn40").style.opacity = 1;
});
// end of task16 instructions button behaviour
//task17 instruction
/*
function instruction17Play() {
	setTimeout(function () {
		task17.play();
	}, 1500);
	//button1.style.display = "none";
}
task17.addEventListener('ended', function () {
	//button1.style.display = "block";
	document.getElementById("nextBtn42").disabled = false;
	document.getElementById("nextBtn42").style.opacity = 1;
});
*/
function instruction17Play(){
	if (task17.paused){
		task17.play();
		button17.removeAttr('id');
		button17.attr('id', 'pauseBtn17');
	}else{
		task17.pause();
		button17.removeAttr('id');
		button17.attr('id', 'readBtn17');
	}
}
task17.addEventListener('ended', function(){
	button17.removeAttr('id');
	button17.attr('id', 'readBtn17');
	task17.currentTime = 0;
	document.getElementById("nextBtn42").disabled = false;
	document.getElementById("nextBtn42").style.opacity = 1;
});

// end of task17 instructions button behaviour
//task18 instruction

function instruction18Play() {
	task18.play();
	button18.style.display = "none";
}
task18.addEventListener('ended', function(){
	button18.style.display = "block";
	document.getElementById("nextBtn44").disabled = false;
	document.getElementById("nextBtn44").style.opacity = 1;
});
// end of task18 instructions button behaviour
//task19 instruction
/*
function instruction19Play() {
	setTimeout(function () {
		task19.play();
	}, 1500);
	//button1.style.display = "none";
}
task19.addEventListener('ended', function () {
	//button1.style.display = "block";
	document.getElementById("nextBtn46").disabled = false;
	document.getElementById("nextBtn46").style.opacity = 1;
});
*/
function instruction19Play(){
	if (task19.paused){
		task19.play();
		button19.removeAttr('id');
		button19.attr('id', 'pauseBtn19');
	}else{
		task19.pause();
		button19.removeAttr('id');
		button19.attr('id', 'readBtn19');
	}
}
task19.addEventListener('ended', function(){
	button19.removeAttr('id');
	button19.attr('id', 'readBtn19');
	task19.currentTime = 0;
	document.getElementById("nextBtn46").disabled = false;
	document.getElementById("nextBtn46").style.opacity = 1;
});
// end of task19 instructions button behaviour
//task20 instruction

function instruction20Play() {
	task20.play();
	button20.style.display = "none";
}
task20.addEventListener('ended', function(){
	button20.style.display = "block";
	document.getElementById("nextBtn48").disabled = false;
	document.getElementById("nextBtn48").style.opacity = 1;
});
// end of task20 instructions button behaviour
//task21 instruction

function instruction21Play() {
	task21.play();
	button21.style.display = "none";
}
task21.addEventListener('ended', function(){
	button21.style.display = "block";
	document.getElementById("nextBtn50").disabled = false;
	document.getElementById("nextBtn50").style.opacity = 1;
});
// end of task21 instructions button behaviour
//task22 instruction

function instruction22Play() {
	task22.play();
	button22.style.display = "none";
}
task22.addEventListener('ended', function(){
	button22.style.display = "block";
	document.getElementById("nextBtn52").disabled = false;
	document.getElementById("nextBtn52").style.opacity = 1;
});
// end of task22 instructions button behaviour
//task23 instruction

function instruction23Play() {
	task23.play();
	button23.style.display = "none";
}
task23.addEventListener('ended', function(){
	button23.style.display = "block";
	document.getElementById("nextBtn54").disabled = false;
	document.getElementById("nextBtn54").style.opacity = 1;
});
// end of task23 instructions button behaviour
//task24 instruction

function instruction24Play() {
	task24.play();
	button24.style.display = "none";
}
task24.addEventListener('ended', function(){
	button24.style.display = "block";
	document.getElementById("nextBtn56").disabled = false;
	document.getElementById("nextBtn56").style.opacity = 1;
});
// end of task24 instructions button behaviour
//task25 instruction

function instruction25Play() {
	task25.play();
	button25.style.display = "none";
}
task25.addEventListener('ended', function(){
	button25.style.display = "block";
	document.getElementById("nextBtn58").disabled = false;
	document.getElementById("nextBtn58").style.opacity = 1;
});
// end of task25 instructions button behaviour
//task26 instruction

function instruction26Play() {
	task26.play();
	button26.style.display = "none";
}
task26.addEventListener('ended', function(){
	button26.style.display = "block";
	document.getElementById("nextBtn61").disabled = false;
	document.getElementById("nextBtn61").style.opacity = 1;
});

/*
function instruction26Play() {
	setTimeout(function () {
		task26.play();
	}, 1500);
	//button1.style.display = "none";
}
task26.addEventListener('ended', function () {
	//button1.style.display = "block";
	document.getElementById("nextBtn61").disabled = false;
	document.getElementById("nextBtn61").style.opacity = 1;
});
*/
/*
function instruction26Play(){
	if (task26.paused){
		task26.play();
		button26.removeAttr('id');
		button26.attr('id', 'pauseBtn26');
	}else{
		task26.pause();
		button26.removeAttr('id');
		button26.attr('id', 'readBtn26');
	}
}
task26.addEventListener('ended', function(){
	button26.removeAttr('id');
	button26.attr('id', 'readBtn26');
	task26.currentTime = 0;
	document.getElementById("nextBtn61").disabled = false;
	document.getElementById("nextBtn61").style.opacity = 1;
});
*/
// end of task26 instructions button behaviour
//task27 instruction
/*
function instruction27Play() {
	task27.play();
	button27.style.display = "none";
}
task27.addEventListener('ended', function(){
	button27.style.display = "block";
	document.getElementById("nextBtn64").disabled = false;
	document.getElementById("nextBtn64").style.opacity = 1;
});
*/
// end of task27 instructions button behaviour
//task28 instruction

function instruction28Play() {
	task28.play();
	button28.style.display = "none";
}
task28.addEventListener('ended', function(){
	button28.style.display = "block";
	document.getElementById("nextBtn66").disabled = false;
	document.getElementById("nextBtn66").style.opacity = 1;
});
// end of task28 instructions button behaviour

//task29 instruction

function instruction29Play() {
	task29.play();
	button29.style.display = "none";
}
task29.addEventListener('ended', function(){
	button29.style.display = "block";
	document.getElementById("nextBtn68").disabled = false;
	document.getElementById("nextBtn68").style.opacity = 1;
});
// end of task29 instructions button behaviour

//task30 instruction

function instruction30Play() {
	task30.play();
	button30.style.display = "none";
}
task30.addEventListener('ended', function(){
	button30.style.display = "block";
	document.getElementById("nextBtn70").disabled = false;
	document.getElementById("nextBtn70").style.opacity = 1;
});
// end of task30 instructions button behaviour

//task31 instruction
/*
function instruction31Play() {
	task31.play();
	button31.style.display = "none";
}
task31.addEventListener('ended', function(){
	button31.style.display = "block";
	document.getElementById("nextBtn72").disabled = false;
	document.getElementById("nextBtn72").style.opacity = 1;
});
*/
// end of task31 instructions button behaviour

//task32 instruction

function instruction32Play() {
	task32.play();
	button32.style.display = "none";
}
task32.addEventListener('ended', function(){
	button32.style.display = "block";
	document.getElementById("nextBtn74").disabled = false;
	document.getElementById("nextBtn74").style.opacity = 1;
});
// end of task32 instructions button behaviour

//task33 instruction

function instruction33Play() {
	task33.play();
	button33.style.display = "none";
}
task33.addEventListener('ended', function(){
	button33.style.display = "block";
	document.getElementById("nextBtn76").disabled = false;
	document.getElementById("nextBtn76").style.opacity = 1;
});
// end of task33 instructions button behaviour

//task1 recording button behaviour
// $('.recbutton').attr('id', 'btn-video-rec');
// $('.recbutton').on('click', function(){
// 	if ($('.recbutton')[0].hasAttribute('id', 'btn-video-rec')){
// 		$('.recbutton').removeAttr('id');
// 		$('.recbutton').attr('id', 'btn-video-stop');
// 	}else{
// 		$('.recbutton').removeAttr('id');
// 		$('.recbutton').attr('id', 'btn-video-rec');
// 	}
// });
// end of task1 recording button behaviour
var timeouts = [];
$('#recButton').addClass("btn-video-rec");
$('#recButton').click(function () {
	if ($('#recButton').hasClass('btn-video-rec')) {
		$('#recButton').removeClass("btn-video-rec");
		$('#recButton').addClass("btn-video-stop");
		$('#recButton').html("Stop");
		document.getElementById("recButton").style.paddingLeft = "15px";
		$('.meter').html('Upload' + '<br>' + 'Progress:' + '<br>' + 0 + '%');
		$('.meter').css("background-color", 'darkblue');
		
		//new codes
		document.getElementById("recButton").disabled = true;
		document.getElementById("recButton").style.opacity = 0.3;
		//add all next buttons whose tabs are video recording here
		document.getElementById("nextBtn6").disabled = true;
		document.getElementById("nextBtn6").style.opacity = 0.3;
		document.getElementById("nextBtn8").disabled = true;
		document.getElementById("nextBtn8").style.opacity = 0.3;
		document.getElementById("nextBtn10").disabled = true;
		document.getElementById("nextBtn10").style.opacity = 0.3;
		document.getElementById("nextBtn12").disabled = true;
		document.getElementById("nextBtn12").style.opacity = 0.3;
		document.getElementById("nextBtn14").disabled = true;
		document.getElementById("nextBtn14").style.opacity = 0.3;
		document.getElementById("nextBtn16").disabled = true;
		document.getElementById("nextBtn16").style.opacity = 0.3;
		document.getElementById("nextBtn18").disabled = true;
		document.getElementById("nextBtn18").style.opacity = 0.3;
		document.getElementById("nextBtn21").disabled = true;
		document.getElementById("nextBtn21").style.opacity = 0.3;
		document.getElementById("nextBtn24").disabled = true;
		document.getElementById("nextBtn24").style.opacity = 0.3;
		document.getElementById("nextBtn26").disabled = true;
		document.getElementById("nextBtn26").style.opacity = 0.3;
		document.getElementById("nextBtn28").disabled = true;
		document.getElementById("nextBtn28").style.opacity = 0.3;
		document.getElementById("nextBtn30").disabled = true;
		document.getElementById("nextBtn30").style.opacity = 0.3;
		document.getElementById("nextBtn32").disabled = true;
		document.getElementById("nextBtn32").style.opacity = 0.3;
		document.getElementById("nextBtn37").disabled = true;
		document.getElementById("nextBtn37").style.opacity = 0.3;
		document.getElementById("nextBtn39").disabled = true;
		document.getElementById("nextBtn39").style.opacity = 0.3;
		document.getElementById("nextBtn49").disabled = true;
		document.getElementById("nextBtn49").style.opacity = 0.3;
		document.getElementById("nextBtn51").disabled = true;
		document.getElementById("nextBtn51").style.opacity = 0.3;
		document.getElementById("nextBtn53").disabled = true;
		document.getElementById("nextBtn53").style.opacity = 0.3;
		document.getElementById("nextBtn55").disabled = true;
		document.getElementById("nextBtn55").style.opacity = 0.3;
		document.getElementById("nextBtn59").disabled = true;
		document.getElementById("nextBtn59").style.opacity = 0.3;
		document.getElementById("nextBtn62").disabled = true;
		document.getElementById("nextBtn62").style.opacity = 0.3;
		document.getElementById("nextBtn67").disabled = true;
		document.getElementById("nextBtn67").style.opacity = 0.3;
		document.getElementById("nextBtn69").disabled = true;
		document.getElementById("nextBtn69").style.opacity = 0.3;
		
		document.getElementById("nextBtn99").disabled = true;
		document.getElementById("nextBtn99").style.opacity = 0.3;
		document.getElementById("nextBtn79").disabled = true;
		document.getElementById("nextBtn79").style.opacity = 0.3;
		document.getElementById("nextBtn80").disabled = true;
		document.getElementById("nextBtn80").style.opacity = 0.3;
		document.getElementById("nextBtn82").disabled = true;
		document.getElementById("nextBtn82").style.opacity = 0.3;
		document.getElementById("nextBtn83").disabled = true;
		document.getElementById("nextBtn83").style.opacity = 0.3;
		document.getElementById("nextBtn84").disabled = true;
		document.getElementById("nextBtn84").style.opacity = 0.3;
		document.getElementById("nextBtn86").disabled = true;
		document.getElementById("nextBtn86").style.opacity = 0.3;
		document.getElementById("nextBtn87").disabled = true;
		document.getElementById("nextBtn87").style.opacity = 0.3;
		document.getElementById("nextBtn88").disabled = true;
		document.getElementById("nextBtn88").style.opacity = 0.3;
		document.getElementById("nextBtn90").disabled = true;
		document.getElementById("nextBtn90").style.opacity = 0.3;
		document.getElementById("nextBtn91").disabled = true;
		document.getElementById("nextBtn91").style.opacity = 0.3;
		document.getElementById("nextBtn92").disabled = true;
		document.getElementById("nextBtn92").style.opacity = 0.3;
		document.getElementById("nextBtn93").disabled = true;
		document.getElementById("nextBtn93").style.opacity = 0.3;
		document.getElementById("nextBtn94").disabled = true;
		document.getElementById("nextBtn94").style.opacity = 0.3;
		document.getElementById("nextBtn96").disabled = true;
		document.getElementById("nextBtn96").style.opacity = 0.3;
		document.getElementById("nextBtn97").disabled = true;
		document.getElementById("nextBtn97").style.opacity = 0.3;
		document.getElementById("nextBtn98").disabled = true;
		document.getElementById("nextBtn98").style.opacity = 0.3;
		show();
		reset();
		videoRecord();
		//newww - stops recording after 1:05 minutes
		timeouts.push( setTimeout(function () {
				$('#recButton').removeClass("btn-video-stop");
				$('#recButton').addClass("btn-video-rec");
				$('#recButton').html("Record");
				document.getElementById("recButton").style.paddingLeft = "6px";
				videoStop();
				document.getElementById("recButton").disabled = true;
				document.getElementById("recButton").style.opacity = 0.3;
			}, 125000) ); // set max video recording to 1:05 minutes
	}
	else {
		$('#recButton').removeClass("btn-video-stop");
		$('#recButton').addClass("btn-video-rec");
		$('#recButton').html("Record");
		document.getElementById("recButton").style.paddingLeft = "6px";
		videoStop();
		document.getElementById("recButton").disabled = true;
		document.getElementById("recButton").style.opacity = 0.3;
	}
});

$('#record1').addClass("btn-record1-audio");
$('#record1').click(function () {
	if ($('#record1').hasClass('btn-record1-audio')) {
		document.getElementById("record1").style.paddingLeft = "18px";
		document.getElementById('countdown-task1').style.visibility = "visible";
		//add all next buttons whose tabs are audio recording here
		document.getElementById("nextBtn35").disabled = true;
		document.getElementById("nextBtn35").style.opacity = 0.3;
		document.getElementById("nextBtn41").disabled = true;
		document.getElementById("nextBtn41").style.opacity = 0.3;
		document.getElementById("nextBtn43").disabled = true;
		document.getElementById("nextBtn43").style.opacity = 0.3;
		document.getElementById("nextBtn45").disabled = true;
		document.getElementById("nextBtn45").style.opacity = 0.3;
		document.getElementById("nextBtn47").disabled = true;
		document.getElementById("nextBtn47").style.opacity = 0.3;
		document.getElementById("nextBtn57").disabled = true;
		document.getElementById("nextBtn57").style.opacity = 0.3;
		document.getElementById("nextBtn71").disabled = true;
		document.getElementById("nextBtn71").style.opacity = 0.3;
		document.getElementById("nextBtn75").disabled = true;
		document.getElementById("nextBtn75").style.opacity = 0.3;
		document.getElementById("nextBtn77").disabled = true;
		document.getElementById("nextBtn77").style.opacity = 0.3;
		document.getElementById('countdown-task1').play();
		$('#record1').removeClass("btn-record1-audio");
		$('#record1').addClass("btn-record-audio");
		//document.getElementById("countdown-task1").innerHTML = "5 s";
		document.getElementById("record1").disabled = true;
		document.getElementById("record1").style.opacity = 0.3;
		document.getElementById("record1").innerHTML = "Stop";
		// document.getElementById("duration1").innerHTML = "0 s";
		$('.meter1').html('Upload' + '<br>' + 'Progress:' + '<br>' + 0 + '%');
		$('.meter1').css("background-color", 'darkblue');
		showAudio();
		resetAudio();
		audioRecord();
		document.getElementById('countdown-task1').addEventListener('ended', function () {
			//document.getElementById("record1").disabled = false;
			//document.getElementById("record1").style.opacity = 1;
			document.getElementById('countdown-task1').style.visibility = "hidden";
			// recorder1.start();
			// audioRecord();
			document.getElementById("record1").disabled = false;
			document.getElementById("record1").style.opacity = 1;
			startAudio();
			//newww - stops audio recording after 2:05 minutes
			timeouts.push( setTimeout(function () {
				$('#record1').removeClass("btn-record-audio");
				$('#record1').addClass("btn-record1-audio");
				document.getElementById("record1").style.paddingLeft = "8px";
				// recorder1.stop();
				audioStop();
				document.getElementById("record1").disabled = true;
				document.getElementById("record1").style.opacity = 0.3;
				// clearTimeout(time_audio);
			}, 140000) ); // set max audio recording to 2:20 minutes
		});
	}
	else {
		$('#record1').removeClass("btn-record-audio");
		$('#record1').addClass("btn-record1-audio");
		document.getElementById("record1").style.paddingLeft = "8px";
		// recorder1.stop();
		audioStop();
		document.getElementById("record1").disabled = true;
		document.getElementById("record1").style.opacity = 0.3;
	}
});

var category = document.getElementById("category");
// list of all video tabs
//var lst_video = [3,5,7,9,11,13,15,17,24,33,36,39,42];
var lst_video = [6, 8, 10, 12, 14, 16, 18, 21, 23, 25, 27, 29, 31, 36, 38, 48, 50, 52, 54, 58, 61, 64, 66, 73, 74, 75, 77, 78, 79, 81, 82, 83, 85, 86, 87, 88, 89, 91, 92, 93];
var lst_task = ['0', '1', '2', '3', '4', '5', 'RST_REST1', '7', 'NSM_BIGSMILE', '9', 'NSM_PUCKER', '11', 'NSM_SMILEFAST', '13', 'NSM_PUFF', '15', 'NSM_PRESS', '17', 'NSM_TNG_RELAX', '19', '20', 'NSM_TNG_PROTRUSION', '22', 'NSM_TNG_LATNORMAL', '24', 'NSM_TNG_NOSE', '26', 'NSM_TNG_LATFAST', '28', 'NSM_NAS_PUFF', '30', 'NSM_NAS_PINCH', '32', '33', 'NSM_NAS_WSTG', '35', 'NSM_JAW_NORMAL', '37', 'NSM_JAW_FAST', '39', 'VWL_SUSTAIN', '41', 'SENT_CAPEV', '43', 'VWL_ELEVATE', '45', 'PSG_BAMBOO', '47', 'DDK_PA', '49', 'DDK_TA', '51', 'DDK_KA', '53', 'DDK_PATAKA', '55', 'NSM_COUGH', '57', 'NSM_SWALLOW', '59', '60', 'CHEW_CRACKER', '62', '63', 'BBP_NORMAL', '65', 'PICT_DESC', '67', 'FLUENCY_PHONEMIC', '69', 'FLUENCY_SEMANTIC', '71', 'STORY', 'RST_REST', 'NSM_OPEN_NORMAL', 'NSM_OPEN_FAST', '76', 'NSM_OPEN_SLOW', 'NSM_BIGSMILE_NORMAL', 'NSM_BIGSMILE_FAST', '80', 'NSM_BIGSMILE_SLOW', 'NSM_OOEE_NORMAL', 'NSM_OOEE_FAST', '84', 'NSM_OOEE_SLOW', 'DDK_PA_NORMAL', 'DDK_PA_SLOW', 'BBP_NORMAL', 'BBP_FAST', '90', 'BBP_SLOW', 'BBP_LOUD', 'RST_REST2', '94'];

// list of all audio tabs
//var lst_audio = [1,19,21,23,26,28,30,32,35,38,41,44];
var lst_audio = [34, 40, 42, 44, 46, 56, 68, 70, 72];

// list of all tabs with disabled next button
//var lst_disabled = [3, 4, 5, 6, 7, 8, 9];

var tempBlob;
//var submitButtonAudio = document.getElementById('audiosubmit');
// var cameraOn = document.getElementById('webcam');
// var cameraOnSample = document.getElementById('btn-camera-on');

// var cameraOnSample1 = document.getElementById('btn-camera-on1');
// var cameraOnSample2 = document.getElementById('btn-camera-on2');
// var cameraOnSample3 = document.getElementById('btn-camera-on3');
// var cameraOnSample4 = document.getElementById('btn-camera-on4');
// var cameraOnSample5 = document.getElementById('btn-camera-on5');

var vid_pause1 = document.getElementById('pause1');
var vid_pause2 = document.getElementById('pause2');
// For today's date
Date.prototype.today = function () { 
	return this.getFullYear() +(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) + ((this.getDate() < 10)?"0":"") + this.getDate();
}

// For the time now
Date.prototype.timeNow = function () {
	return ((this.getHours() < 10)?"0":"") + this.getHours() + ((this.getMinutes() < 10)?"0":"") + this.getMinutes() + ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}
// subject ID Generator
//var subjectID = Math.floor((Math.random() * 100000) + 1).toString();
//var subjectID_name = document.getElementById("subjectID").value;

/* Disables the enter key to prevent accidental submission */
$(document).keypress(
	function(event){
	if (event.which == '13') {
		event.preventDefault();
	}
});


// count down code begins


// detect if device is mobile
const obj = {
	get isMobile() {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		return true;
	} else{
		return false;
	}
	}
};
if (obj.isMobile) {
	//window.location.href = "http://localhost:81/pd-webapp2/index_mobile.html";
	window.location.href = "https://virtual-slp.com/index_mobile.html";
}

// starting the code related to audio recorder
// var recorder1 = new WzRecorder({
// 	// visualizer: {
// 	// element: document.getElementById('canvas1');
// 	// },
// 	onRecordingStop: function (blob) {
// 		document.getElementById('player1').src = URL.createObjectURL(blob);
// 		tempBlob = blob;
// 		//document.getElementById("audiosubmit").disabled = false; 
// 		//document.getElementById("audiosubmit").style.opacity = 1;
// 		document.getElementById('result1').innerHTML = "";
// 		document.getElementById('record1').innerHTML = "Record";
// 		// clear audio timeouts
// 		for (var i = 0; i < timeouts.length; i++) {
// 			clearTimeout(timeouts[i]);
// 		}
// 		//quick reset of the timer array we just cleared
// 		timeouts = [];
// 		audioUpload();
// 	},
// 	onRecording: function (milliseconds) {
// 		document.getElementById('duration1').innerHTML = Math.floor(milliseconds / 1000) + " " + 's';
// 		document.getElementById('result1').innerHTML = "";
// 		document.getElementById('record1').innerHTML = "Stop";
// 		document.getElementById("record1").disabled = false;
// 		document.getElementById("record1").style.opacity = 1;
// 	}
// });

var audioRecorder; // globally accessible
var microphone;

function captureMicrophone() {
    // ReleaseMicrophone();

    if(microphone) {
        // callback(microphone);
        return;
    }

    if(typeof navigator.mediaDevices === 'undefined' || !navigator.mediaDevices.getUserMedia) {
        alert('This browser does not supports WebRTC getUserMedia API.');

        if(!!navigator.getUserMedia) {
            alert('This browser seems supporting deprecated getUserMedia API.');
        }
    }

    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(function (mic) {
		microphone = mic;
	}).catch(function(error) {
        alert('Unable to capture your microphone. Please check console logs.');
        console.error(error);
    });
};

function audioRecord() {
    // this.disabled = true;
    // this.style.border = '';
    // this.style.fontSize = '';

    if (!microphone) {
        captureMicrophone();
        // return;
    }

    // replaceAudio();

    // audio.muted = true;
    // audio.srcObject = microphone;
	// showAudio();
	// resetAudio();
    var options = {
        type: 'audio',
        numberOfAudioChannels: 1,
        checkForInactiveTracks: true,
        bufferSize: 16384,
		bitsPerSecond: 128000,
		mimeType: 'audio/wav',
    };

    // if(isSafari || isEdge) {
    //     options.recorderType = StereoAudioRecorder;
    // }

    if(navigator.platform && navigator.platform.toString().toLowerCase().indexOf('win') === -1) {
        options.sampleRate = 48000; // or 44100 or remove this line for default
    }

    // if(isSafari) {
    //     options.sampleRate = 44100;
    //     options.bufferSize = 4096;
    //     options.numberOfAudioChannels = 2;
    // }

    if(audioRecorder) {
        audioRecorder.destroy();
        audioRecorder = null;
    }

    audioRecorder = RecordRTC(microphone, options);
    audioRecorder.startRecording();
    // startAudio();
	// document.getElementById("record1").disabled = false;
	// document.getElementById("record1").style.opacity = 1;
    // btnStopRecording.disabled = false;
    // btnDownloadRecording.disabled = true;
};

function ReleaseMicrophone() {
    // this.disabled = true;
    // btnStartRecording.disabled = false;

    if(microphone) {
        microphone.stop();
        microphone = null;
    }

    if(audioRecorder) {
        audioStop();
    }
};

function audioStop() {
    // this.disabled = true;
    // clearTimeOut for all pushed timeouts
	document.getElementById('result1').innerHTML = "";
	document.getElementById('record1').innerHTML = "Record";
	for (var i = 0; i < timeouts.length; i++) {
		clearTimeout(timeouts[i]);
	}
	//quick reset of the timer array we just cleared
	timeouts = [];
	audioRecorder.stopRecording(function () {
		var blob = audioRecorder.getBlob();
		tempBlob = blob;
		// console.log(tempBlob);
		stopAudio();
		updateAudio();
		audioUpload();
	});
    // if(!audioRecorder || !audioRecorder.getBlob()) return;

    // if(isSafari) {
    //     audioRecorder.getDataURL(function(dataURL) {
    //         SaveToDisk(dataURL, getFileName('wav'));
    //     });
    //     return;
    // }

    // var file = new File([blob], getFileName('wav'), {
    //     type: 'audio/wav'
    // });
    // invokeSaveAsDialog(file);
};

// wire up the microphone button to toggle recording
// document.getElementById('record1').onclick = recorder1.toggleRecording;
// document.getElementById('record1').addEventListener('click', () => {
//    setTimeout(() => {
	// recorder1.start();
//    }, 5000);
// });

//starting the code related to recorder.js
/*
//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext //audio context to help us record

var recordButtonAudio = document.getElementsByClassName("btn-record1-audio");
var stopButtonAudio = document.getElementsByClassName("btn-record-audio");
//var pauseButton = document.getElementById("pauseButton");

//add events to those 2 buttons
recordButtonAudio[0].addEventListener("click", startRecording);
stopButtonAudio[0].addEventListener("click", stopRecording);
//pauseButton.addEventListener("click", pauseRecording);
*/
/*
function startRecording() {
	console.log("recordButton clicked");
	//recordButtonAudio = document.getElementById("disappear-audio");;
	//stopButtonAudio = document.getElementById("record1");
	//	Simple constraints object, for more advanced audio features see
	//	https://addpipe.com/blog/audio-constraints-getusermedia/
    
    var constraints = { audio: true, video:false }


    //	Disable the record button until we get a success or fail from getUserMedia() 


	//recordButton.disabled = true;
	//stopButton.disabled = false;
	//pauseButton.disabled = false

    //	We're using the standard promise based getUserMedia() 
    //	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia


	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
		console.log("getUserMedia() success, stream created, initializing Recorder.js ...");


		//	create an audio context after getUserMedia is called
		//	sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
		//	the sampleRate defaults to the one set in your OS for your playback device


		audioContext = new AudioContext();

		//update the format 
		//document.getElementById("formats").innerHTML="Format: 1 channel pcm @ "+audioContext.sampleRate/1000+"kHz"

		//assign to gumStream for later use
		gumStream = stream;
		
		// use the stream
		input = audioContext.createMediaStreamSource(stream);


		//	Create the Recorder object and configure to record mono sound (1 channel)
		//	Recording 2 channels  will double the file size

		rec = new Recorder(input,{numChannels:1})

		//start the recording process
		rec.record()

		console.log("Recording started");

	}).catch(function(err) {
	  	//enable the record button if getUserMedia() fails
    	//recordButton.disabled = false;
    	//stopButton.disabled = true;
    	//pauseButton.disabled = true
	});
}
*/
/*
function pauseRecording(){
	console.log("pauseButton clicked rec.recording=",rec.recording );
	if (rec.recording){
		//pause
		rec.stop();
		pauseButton.innerHTML="Resume";
	}else{
		//resume
		rec.record();
		pauseButton.innerHTML="Pause";

	}
}
*/
/*
function stopRecording() {
	console.log("stopButton clicked");
	//recordButtonAudio = document.getElementById("record1");
	//stopButtonAudio = document.getElementById("disappear-audio");
	//disable the stop button, enable the record too allow for new recordings
	//stopButtonAudio.disabled = true;
	//recordButtonAudio.disabled = false;
	//pauseButton.disabled = true;

	//reset button just in case the recording is stopped while paused
	//pauseButton.innerHTML="Pause";
	
	//tell the recorder to stop the recording
	rec.stop();

	//stop microphone access
	gumStream.getAudioTracks()[0].stop();

	//create the wav blob and pass it on to createDownloadLink
	rec.exportWAV(createDownloadLink);
}
*/
/*
function createDownloadLink(blob) {
	
	var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');
	var li = document.createElement('li');
	var link = document.createElement('a');
	document.getElementById('player1').src = url;

	//name of .wav file to use during upload and download (without extendion)
	var filename = new Date().toISOString();

	//add controls to the <audio> element
	au.controls = true;
	au.src = url;

	//save to disk link
	link.href = url;
	link.download = filename+".wav"; //download forces the browser to donwload the file using the  filename
	link.innerHTML = "Save to disk";

	//add the new audio element to li
	li.appendChild(au);
	
	//add the filename to the li
	li.appendChild(document.createTextNode(filename+".wav "))

	//add the save to disk link to li
	li.appendChild(link);
	
	//upload link
	var upload = document.createElement('a');
	upload.href="#";
	upload.innerHTML = "Upload";
	upload.addEventListener("click", function(event){
		var xhr=new XMLHttpRequest();
		xhr.onload=function(e) {
		    if(this.readyState === 4) {
		        console.log("Server returned: ",e.target.responseText);
		    }
		};
		var fd=new FormData();
		fd.append("audio_data",blob, filename);
		xhr.open("POST","upload.php",true);
		xhr.send(fd);
	})
	li.appendChild(document.createTextNode (" "))//add a space in between
	li.appendChild(upload)//add the upload link to li

	//add the li element to the ol
	recordingsList.appendChild(li);
}
*/

// starting the code related to video recorder

const players = new Plyr('#your-video', {
	controls: [],
});
const playerSample = new Plyr('#your-video-sample', {
	controls: [],
});

const playerSample1 = new Plyr('#your-video-sample1', {
	controls: [],
});
const playerSample2 = new Plyr('#your-video-sample2', {
	controls: [],
});
const playerSample3 = new Plyr('#your-video-sample3', {
	controls: [],
});
const playerSample4 = new Plyr('#your-video-sample4', {
	controls: [],
});
const playerSample5 = new Plyr('#your-video-sample5', {
	controls: [],
});

var recorder;
var tempCamera;
var yourVideo = document.getElementById('your-video');
var yourVideoSample = document.getElementById('your-video-sample');

var yourVideoSample1 = document.getElementById('your-video-sample1');
var yourVideoSample2 = document.getElementById('your-video-sample2');
var yourVideoSample3 = document.getElementById('your-video-sample3');
var yourVideoSample4 = document.getElementById('your-video-sample4');
var yourVideoSample5 = document.getElementById('your-video-sample5');

//var recordButton = document.getElementById('btn-video-rec');
//var submitButton = document.getElementById('videosubmit');
//var stopButton = document.getElementById('btn-video-stop');
//submitButtonAudio.disabled = true; 
//submitButtonAudio.style.opacity = 0.3;
// submitButton.disabled = true; 
// submitButton.style.opacity = 0.3;
// document.getElementById("recButton").disabled = true;
// document.getElementById("recButton").style.opacity = 0.3;
var bloby;
//stopButton.disabled = true;
//stopButton.style.opacity = 0.3;
//recordButton.disabled = true;
//recordButton.style.opacity = 0.3;
/*
cameraOnSample.onclick = function() {
	detectMedia();
	cameraOnSample.disabled = true;
	cameraOnSample.style.opacity = 0.3;
	document.getElementById("nextBtn4").disabled = false;
	document.getElementById("nextBtn4").style.opacity = 1;
}

cameraOnSample1.onclick = function() {
	detectMedia();
	cameraOnSample1.disabled = true;
	cameraOnSample1.style.opacity = 0.3;
	document.getElementById("nextBtn19").disabled = false;
	document.getElementById("nextBtn19").style.opacity = 1;
}

cameraOnSample2.onclick = function() {
	detectMedia();
	cameraOnSample2.disabled = true;
	cameraOnSample2.style.opacity = 0.3;
	document.getElementById("nextBtn22").disabled = false;
	document.getElementById("nextBtn22").style.opacity = 1;
}

cameraOnSample3.onclick = function() {
	detectMedia();
	cameraOnSample3.disabled = true;
	cameraOnSample3.style.opacity = 0.3;
	document.getElementById("nextBtn33").disabled = false;
	document.getElementById("nextBtn33").style.opacity = 1;
}

cameraOnSample4.onclick = function() {
	detectMedia();
	cameraOnSample4.disabled = true;
	cameraOnSample4.style.opacity = 0.3;
	document.getElementById("nextBtn60").disabled = false;
	document.getElementById("nextBtn60").style.opacity = 1;
}

cameraOnSample5.onclick = function() {
	detectMedia();
	cameraOnSample5.disabled = true;
	cameraOnSample5.style.opacity = 0.3;
	document.getElementById("nextBtn63").disabled = false;
	document.getElementById("nextBtn63").style.opacity = 1;
}


cameraOn.onclick = function() {
	var cameraProperties = {
        video: {
            width: 960,
            height: 720
        },
        audio: true
    };
	navigator.mediaDevices.getUserMedia(cameraProperties).then(function(cameraStream) {
	yourVideo.volume = 0;
	yourVideo.srcObject = cameraStream;
	tempCamera = cameraStream;

	});
	cameraOn.disabled = true;
	cameraOn.style.opacity = 0.3;
	document.getElementById("recButton").disabled = false;
	document.getElementById("recButton").style.opacity = 1;
	//recordButton.disabled = false;
	//recordButton.style.opacity = 1;
}
*/
function videoRecord() {
	// FINAL : add all video recording tabs
	document.getElementById("nextBtn6").disabled = true;
	document.getElementById("nextBtn6").style.opacity = 0.3;
	document.getElementById("nextBtn8").disabled = true;
	document.getElementById("nextBtn8").style.opacity = 0.3;
	document.getElementById("nextBtn10").disabled = true;
	document.getElementById("nextBtn10").style.opacity = 0.3;
	document.getElementById("nextBtn12").disabled = true;
	document.getElementById("nextBtn12").style.opacity = 0.3;
	document.getElementById("nextBtn14").disabled = true;
	document.getElementById("nextBtn14").style.opacity = 0.3;
	document.getElementById("nextBtn16").disabled = true;
	document.getElementById("nextBtn16").style.opacity = 0.3;
	document.getElementById("nextBtn18").disabled = true;
	document.getElementById("nextBtn18").style.opacity = 0.3;
	document.getElementById("nextBtn21").disabled = true;
	document.getElementById("nextBtn21").style.opacity = 0.3;
	document.getElementById("nextBtn24").disabled = true;
	document.getElementById("nextBtn24").style.opacity = 0.3;
	document.getElementById("nextBtn26").disabled = true;
	document.getElementById("nextBtn26").style.opacity = 0.3;
	document.getElementById("nextBtn28").disabled = true;
	document.getElementById("nextBtn28").style.opacity = 0.3;
	document.getElementById("nextBtn30").disabled = true;
	document.getElementById("nextBtn30").style.opacity = 0.3;
	document.getElementById("nextBtn32").disabled = true;
	document.getElementById("nextBtn32").style.opacity = 0.3;
	document.getElementById("nextBtn37").disabled = true;
	document.getElementById("nextBtn37").style.opacity = 0.3;
	document.getElementById("nextBtn39").disabled = true;
	document.getElementById("nextBtn39").style.opacity = 0.3;
	document.getElementById("nextBtn49").disabled = true;
	document.getElementById("nextBtn49").style.opacity = 0.3;
	document.getElementById("nextBtn51").disabled = true;
	document.getElementById("nextBtn51").style.opacity = 0.3;
	document.getElementById("nextBtn53").disabled = true;
	document.getElementById("nextBtn53").style.opacity = 0.3;
	document.getElementById("nextBtn55").disabled = true;
	document.getElementById("nextBtn55").style.opacity = 0.3;
	document.getElementById("nextBtn59").disabled = true;
	document.getElementById("nextBtn59").style.opacity = 0.3;
	document.getElementById("nextBtn62").disabled = true;
	document.getElementById("nextBtn62").style.opacity = 0.3;
	document.getElementById("nextBtn67").disabled = true;
	document.getElementById("nextBtn67").style.opacity = 0.3;
	document.getElementById("nextBtn69").disabled = true;
	document.getElementById("nextBtn69").style.opacity = 0.3;

	document.getElementById("nextBtn99").disabled = true;
	document.getElementById("nextBtn99").style.opacity = 0.3;
	document.getElementById("nextBtn79").disabled = true;
	document.getElementById("nextBtn79").style.opacity = 0.3;
	document.getElementById("nextBtn80").disabled = true;
	document.getElementById("nextBtn80").style.opacity = 0.3;
	document.getElementById("nextBtn82").disabled = true;
	document.getElementById("nextBtn82").style.opacity = 0.3;
	document.getElementById("nextBtn83").disabled = true;
	document.getElementById("nextBtn83").style.opacity = 0.3;
	document.getElementById("nextBtn84").disabled = true;
	document.getElementById("nextBtn84").style.opacity = 0.3;
	document.getElementById("nextBtn86").disabled = true;
	document.getElementById("nextBtn86").style.opacity = 0.3;
	document.getElementById("nextBtn87").disabled = true;
	document.getElementById("nextBtn87").style.opacity = 0.3;
	document.getElementById("nextBtn88").disabled = true;
	document.getElementById("nextBtn88").style.opacity = 0.3;
	document.getElementById("nextBtn90").disabled = true;
	document.getElementById("nextBtn90").style.opacity = 0.3;
	document.getElementById("nextBtn91").disabled = true;
	document.getElementById("nextBtn91").style.opacity = 0.3;
	document.getElementById("nextBtn92").disabled = true;
	document.getElementById("nextBtn92").style.opacity = 0.3;
	document.getElementById("nextBtn93").disabled = true;
	document.getElementById("nextBtn93").style.opacity = 0.3;
	document.getElementById("nextBtn94").disabled = true;
	document.getElementById("nextBtn94").style.opacity = 0.3;
	document.getElementById("nextBtn96").disabled = true;
	document.getElementById("nextBtn96").style.opacity = 0.3;
	document.getElementById("nextBtn97").disabled = true;
	document.getElementById("nextBtn97").style.opacity = 0.3;
	document.getElementById("nextBtn98").disabled = true;
	document.getElementById("nextBtn98").style.opacity = 0.3;
	// document.getElementById("nextBtn8").disabled = true;
	// document.getElementById("nextBtn8").style.opacity = 0.3;
	tempCamera.stop();
	yourVideo.srcObject = null;
	//recordButton.disabled = true;
	//recordButton.style.opacity = 0.3;
	//uncomment below for video timer
	// show();
	// reset();

	var cameraProperties = {
		audio: true,
		video: {
			width: { min: 1024, ideal: 1280, max: 1920 },
			height: { min: 576, ideal: 720, max: 1080 }
		}
	};
	//players.toggleControls(false);
	yourVideo.src = 'timer.mp4';
	setTimeout(function () {
		navigator.mediaDevices.getUserMedia(cameraProperties).then(function (cameraStream) {
			document.getElementById("recButton").disabled = false;
			document.getElementById("recButton").style.opacity = 1;
			//stopButton.disabled = false;
			//stopButton.style.opacity = 1;
			yourVideo.volume = 0;
			yourVideo.srcObject = cameraStream;
			//players.toggleControls(true);

			recorder = RecordRTC(cameraStream, {
				videoBitsPerSecond: 6400000,
				audioBitsPerSecond: 128000,
				mimeType: 'video/mp4'
			});
			recorder.startRecording();
			// timer start function
			//uncomment below for video timer
			start();
			stp = cameraStream;
			//newww -deleted the stuff below
			// setTimeout(function () {
			// 	recorder.stopRecording(function () {
			// 		//stopButton.disabled = true;
			// 		//stopButton.style.opacity = 0.3;
			// 		//recordButton.disabled = false;
			// 		//recordButton.style.opacity = 1;
			// 		var blob = recorder.getBlob();
			// 		cameraStream.stop();
			// 		// timer stop and update functions
			// 		//uncomment below for video timer
			// 		stop();
			// 		update();
			// 		//alert('Recording size: ' + bytesToSize(blob.size));

			// 		var videoURL = URL.createObjectURL(blob);

			// 		//console.log(bloby);
			// 		//source = videoURL;
			// 		yourVideo.srcObject = null;
			// 		yourVideo.volume = 1;
			// 		yourVideo.src = videoURL;
			// 		bloby = blob;
			// 		// submitButton.disabled = false;
			// 		// submitButton.style.opacity = 1;
			// 	});
			// }, 120000); //set the max recording in ms
		}).catch(function(error) {
			alert('Unable to capture your camera. Please check console logs.');
			console.error(error);
    	});
	}, 3500); //set the max countdown at the start of recording
}
function videoStop() {
	//stopButton.disabled = true;
	//stopButton.style.opacity = 0.3;
	//recordButton.disabled = false;
	//recordButton.style.opacity = 1;
	// clearTimeOut for all pushed timeouts
	for (var i = 0; i < timeouts.length; i++) {
		clearTimeout(timeouts[i]);
	}
	//quick reset of the timer array we just cleared
	timeouts = [];
	recorder.stopRecording(function () {
		var blob = recorder.getBlob();
		stp.stop();
		//uncomment below for video timer
		stop();
		update();
		//alert('Recording size: ' + bytesToSize(blob.size));

		var videoURL = URL.createObjectURL(blob);
		//console.log(bloby);
		yourVideo.srcObject = null;
		yourVideo.volume = 1;
		//yourVideo.src = videoURL;
		yourVideo.src = "";
		bloby = blob;
		//submitButton.disabled = false;
		//submitButton.style.opacity = 1;
		videoUpload();
	});
}

// uploading by clicking
/*
submitButton.addEventListener("click", function () {
	var filename = category.value + "_" + document.getElementById("subjectID").value.toUpperCase() + "_" + lst_task[currentTab] + "_" + new Date().today().toString() + "_" + new Date().timeNow().toString() + "_r_demo.mp4";
	var dir = "/" + category.value + "/" + document.getElementById("subjectID").value.toUpperCase() + "/";
    //var formData = new FormData();
	var accessToken = "R8JI-nip1M8AAAAAAAAAAX-xnqvta7v4J9Le5QMCP_fmbjvoHnqMjgH43n3NV9Ax";
	var uploadUrl = "https://content.dropboxapi.com/2/files/upload";
    var xhr = new XMLHttpRequest();
    //formData.append('name', filename);
    //formData.append('video', bloby);
    
    xhr.open('POST', uploadUrl, true);
	xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
    //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader("Content-Type", "application/octet-stream");
	xhr.setRequestHeader('Dropbox-API-Arg', JSON.stringify({
		path: dir + filename
		//path: "/" + filename
	}));
    xhr.upload.addEventListener("load", function () {
        $(".meter").addClass("done");
    });
    xhr.upload.addEventListener("progress", function (event) {
        if (event.lengthComputable) {
            var complete = (event.loaded / event.total * 100 | 0);
            //$('.meter').css('width', complete + '%');
			$('.meter').html("Upload Progress:" + complete.toString() + '%');
			if (complete == 100) {
				$('.meter').css("background-color", 'green');
				document.getElementById("nextBtn").disabled = false;
				document.getElementById("nextBtn").style.opacity = 1;
			}
        }
    });
	//xhr.onload = function(){ document.getElementById("resultResponse").innerHTML = this.response; };
    
    xhr.send(bloby);
	submitButton.disabled = true;
	submitButton.style.opacity = 0.3;
	recordButton.disabled = true;
    recordButton.style.opacity = 0.3;
    return false;
});
*/
function videoUpload() {
	var filename = category.value + "_" + document.getElementById("subjectID").value.toUpperCase() + "_" + lst_task[globalPages[currentTab]] + "_" + new Date().today().toString() + "_" + new Date().timeNow().toString() + "_r.mp4";
	var dir = "/" + category.value + "/" + document.getElementById("subjectID").value.toUpperCase() + "/";
	//var formData = new FormData();
	var accessToken = "R8JI-nip1M8AAAAAAAAAAX-xnqvta7v4J9Le5QMCP_fmbjvoHnqMjgH43n3NV9Ax";
	var uploadUrl = "https://content.dropboxapi.com/2/files/upload";
	var xhr = new XMLHttpRequest();
	//formData.append('name', filename);
	//formData.append('video', bloby);

	xhr.open('POST', uploadUrl, true);
	xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
	//xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader("Content-Type", "application/octet-stream");
	xhr.setRequestHeader('Dropbox-API-Arg', JSON.stringify({
		path: dir + filename
		//path: "/" + filename
	}));
	xhr.upload.addEventListener("load", function () {
		$(".meter").addClass("done");
	});
	xhr.upload.addEventListener("progress", function (event) {
		if (event.lengthComputable) {
			var complete = (event.loaded / event.total * 100 | 0);
			//$('.meter').css('width', complete + '%');
			$('.meter').html('Upload' + '<br>' + 'Progress:' + '<br>' + complete.toString() + '%');
			if (complete == 100) {
				$('.meter').css("background-color", 'green');
				// document.getElementById("recButton").disabled = false;
				// document.getElementById("recButton").style.opacity = 1;
				detectMediaMain();
				setTimeout(function () {
					// FINAL : add all video recording pages here
					//newww - 2 second delay for enabling record button - prevents app crash
					document.getElementById("nextBtn6").disabled = false;
					document.getElementById("nextBtn6").style.opacity = 1;
					document.getElementById("nextBtn8").disabled = false;
					document.getElementById("nextBtn8").style.opacity = 1;
					document.getElementById("nextBtn10").disabled = false;
					document.getElementById("nextBtn10").style.opacity = 1;
					document.getElementById("nextBtn12").disabled = false;
					document.getElementById("nextBtn12").style.opacity = 1;
					document.getElementById("nextBtn14").disabled = false;
					document.getElementById("nextBtn14").style.opacity = 1;
					document.getElementById("nextBtn16").disabled = false;
					document.getElementById("nextBtn16").style.opacity = 1;
					document.getElementById("nextBtn18").disabled = false;
					document.getElementById("nextBtn18").style.opacity = 1;
					document.getElementById("nextBtn21").disabled = false;
					document.getElementById("nextBtn21").style.opacity = 1;
					document.getElementById("nextBtn24").disabled = false;
					document.getElementById("nextBtn24").style.opacity = 1;
					document.getElementById("nextBtn26").disabled = false;
					document.getElementById("nextBtn26").style.opacity = 1;
					document.getElementById("nextBtn28").disabled = false;
					document.getElementById("nextBtn28").style.opacity = 1;
					document.getElementById("nextBtn30").disabled = false;
					document.getElementById("nextBtn30").style.opacity = 1;
					document.getElementById("nextBtn32").disabled = false;
					document.getElementById("nextBtn32").style.opacity = 1;
					document.getElementById("nextBtn37").disabled = false;
					document.getElementById("nextBtn37").style.opacity = 1;
					document.getElementById("nextBtn39").disabled = false;
					document.getElementById("nextBtn39").style.opacity = 1;
					document.getElementById("nextBtn49").disabled = false;
					document.getElementById("nextBtn49").style.opacity = 1;
					document.getElementById("nextBtn51").disabled = false;
					document.getElementById("nextBtn51").style.opacity = 1;
					document.getElementById("nextBtn53").disabled = false;
					document.getElementById("nextBtn53").style.opacity = 1;
					document.getElementById("nextBtn55").disabled = false;
					document.getElementById("nextBtn55").style.opacity = 1;
					document.getElementById("nextBtn59").disabled = false;
					document.getElementById("nextBtn59").style.opacity = 1;
					document.getElementById("nextBtn62").disabled = false;
					document.getElementById("nextBtn62").style.opacity = 1;
					document.getElementById("nextBtn67").disabled = false;
					document.getElementById("nextBtn67").style.opacity = 1;
					document.getElementById("nextBtn69").disabled = false;
					document.getElementById("nextBtn69").style.opacity = 1;
					document.getElementById("nextBtn99").disabled = false;
					document.getElementById("nextBtn99").style.opacity = 1;
					document.getElementById("nextBtn79").disabled = false;
					document.getElementById("nextBtn79").style.opacity = 1;
					document.getElementById("nextBtn80").disabled = false;
					document.getElementById("nextBtn80").style.opacity = 1;
					document.getElementById("nextBtn82").disabled = false;
					document.getElementById("nextBtn82").style.opacity = 1;
					document.getElementById("nextBtn83").disabled = false;
					document.getElementById("nextBtn83").style.opacity = 1;
					document.getElementById("nextBtn84").disabled = false;
					document.getElementById("nextBtn84").style.opacity = 1;
					document.getElementById("nextBtn86").disabled = false;
					document.getElementById("nextBtn86").style.opacity = 1;
					document.getElementById("nextBtn87").disabled = false;
					document.getElementById("nextBtn87").style.opacity = 1;
					document.getElementById("nextBtn88").disabled = false;
					document.getElementById("nextBtn88").style.opacity = 1;
					document.getElementById("nextBtn90").disabled = false;
					document.getElementById("nextBtn90").style.opacity = 1;
					document.getElementById("nextBtn91").disabled = false;
					document.getElementById("nextBtn91").style.opacity = 1;
					document.getElementById("nextBtn92").disabled = false;
					document.getElementById("nextBtn92").style.opacity = 1;
					document.getElementById("nextBtn93").disabled = false;
					document.getElementById("nextBtn93").style.opacity = 1;
					document.getElementById("nextBtn94").disabled = false;
					document.getElementById("nextBtn94").style.opacity = 1;
					document.getElementById("nextBtn96").disabled = false;
					document.getElementById("nextBtn96").style.opacity = 1;
					document.getElementById("nextBtn97").disabled = false;
					document.getElementById("nextBtn97").style.opacity = 1;
					document.getElementById("nextBtn98").disabled = false;
					document.getElementById("nextBtn98").style.opacity = 1;
				}, 2000);
			}
		}
	});
	//xhr.onload = function(){ document.getElementById("resultResponse").innerHTML = this.response; };

	xhr.send(bloby);
	//submitButton.disabled = true;
	//submitButton.style.opacity = 0.3;
	//recordButton.disabled = true;
	//recordButton.style.opacity = 0.3;
	return false;
}
// uploading by clicking
/*
submitButtonAudio.addEventListener("click", function () {
	var filename = category.value + "_" + document.getElementById("subjectID").value.toUpperCase() + "_" + lst_task[currentTab] + "_" + new Date().today().toString() + "_" + new Date().timeNow().toString() + "_r_demo.wav";
	var dir = "/" + category.value + "/" + document.getElementById("subjectID").value.toUpperCase() + "/";
    //var formData = new FormData();
	var accessToken = "R8JI-nip1M8AAAAAAAAAAX-xnqvta7v4J9Le5QMCP_fmbjvoHnqMjgH43n3NV9Ax";
	var uploadUrl = "https://content.dropboxapi.com/2/files/upload";
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', uploadUrl, true);
	xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
    //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader("Content-Type", "application/octet-stream");
	xhr.setRequestHeader('Dropbox-API-Arg', JSON.stringify({
		path: dir + filename
		//path: "/" + filename
	}));
    xhr.upload.addEventListener("load", function () {
        $(".meter1").addClass("done");
    });
    xhr.upload.addEventListener("progress", function (event) {
        if (event.lengthComputable) {
            var complete = (event.loaded / event.total * 100 | 0);
            $('.meter1').css('width', 100 + '%');
			$('.meter1').html('Upload' + '<br>' + 'Progress:' + '<br>' + complete.toString() + '%');
			if (complete == 100) {
				$('.meter1').css("background-color", 'green');
				document.getElementById("nextBtn").disabled = false;
				document.getElementById("nextBtn").style.opacity = 1;
			}
        }
    });
	//xhr.onload = function(){ document.getElementById("resultResponse").innerHTML = this.response; };
    
    xhr.send(tempBlob);
	document.getElementById('audiosubmit').disabled = true;
	document.getElementById('audiosubmit').style.opacity = 0.3;
	document.getElementById('record1').disabled = true;
	document.getElementById('record1').style.opacity = 0.3;
    return false;
});
*/
function audioUpload() {
	var filename = category.value + "_" + document.getElementById("subjectID").value.toUpperCase() + "_" + lst_task[globalPages[currentTab]] + "_" + new Date().today().toString() + "_" + new Date().timeNow().toString() + "_r.wav";
	var dir = "/" + category.value + "/" + document.getElementById("subjectID").value.toUpperCase() + "/";
	//var formData = new FormData();
	var accessToken = "R8JI-nip1M8AAAAAAAAAAX-xnqvta7v4J9Le5QMCP_fmbjvoHnqMjgH43n3NV9Ax";
	var uploadUrl = "https://content.dropboxapi.com/2/files/upload";
	var xhr = new XMLHttpRequest();

	xhr.open('POST', uploadUrl, true);
	xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
	//xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader("Content-Type", "application/octet-stream");
	xhr.setRequestHeader('Dropbox-API-Arg', JSON.stringify({
		path: dir + filename
		//path: "/" + filename
	}));
	xhr.upload.addEventListener("load", function () {
		$(".meter1").addClass("done");
	});
	xhr.upload.addEventListener("progress", function (event) {
		if (event.lengthComputable) {
			var complete = (event.loaded / event.total * 100 | 0);
			//$('.meter1').css('width', 100 + '%');
			$('.meter1').html('Upload' + '<br>' + 'Progress:' + '<br>' + complete.toString() + '%');
			if (complete == 100) {
				$('.meter1').css("background-color", 'green');
				document.getElementById("record1").disabled = false;
				document.getElementById("record1").style.opacity = 1;
				// FINAL : add all audio recording pages here
				document.getElementById("nextBtn35").disabled = false;
				document.getElementById("nextBtn35").style.opacity = 1;
				document.getElementById("nextBtn41").disabled = false;
				document.getElementById("nextBtn41").style.opacity = 1;
				document.getElementById("nextBtn43").disabled = false;
				document.getElementById("nextBtn43").style.opacity = 1;
				document.getElementById("nextBtn45").disabled = false;
				document.getElementById("nextBtn45").style.opacity = 1;
				document.getElementById("nextBtn47").disabled = false;
				document.getElementById("nextBtn47").style.opacity = 1;
				document.getElementById("nextBtn57").disabled = false;
				document.getElementById("nextBtn57").style.opacity = 1;
				document.getElementById("nextBtn71").disabled = false;
				document.getElementById("nextBtn71").style.opacity = 1;
				document.getElementById("nextBtn75").disabled = false;
				document.getElementById("nextBtn75").style.opacity = 1;
				document.getElementById("nextBtn77").disabled = false;
				document.getElementById("nextBtn77").style.opacity = 1;
			}
		}
	});
	//xhr.onload = function(){ document.getElementById("resultResponse").innerHTML = this.response; };

	xhr.send(tempBlob);
	//document.getElementById('audiosubmit').disabled = true;
	//document.getElementById('audiosubmit').style.opacity = 0.3;
	//document.getElementById('record1').disabled = true;
	//document.getElementById('record1').style.opacity = 0.3;
	return false;
}
// starting the code related to form
function isOdd(num) { return num % 2;}
function isVideo(num) { return lst_video.includes(num);}
function isAudio(num) { return lst_audio.includes(num);}
function detectMedia() {
	var cameraProperties = {
        audio: true,
		video: {
			width: { min: 1024, ideal: 1280, max: 1920 },
			height: { min: 576, ideal: 720, max: 1080 }
		}
    };
	navigator.mediaDevices.getUserMedia(cameraProperties).then(function(cameraStream) {
		yourVideoSample.volume = 0;
		yourVideoSample.srcObject = cameraStream;
		yourVideoSample1.volume = 0;
		yourVideoSample1.srcObject = cameraStream;
		//yourVideoSample2.volume = 0;
		//yourVideoSample2.srcObject = cameraStream;
		yourVideoSample3.volume = 0;
		yourVideoSample3.srcObject = cameraStream;
		yourVideoSample4.volume = 0;
		yourVideoSample4.srcObject = cameraStream;
		yourVideoSample5.volume = 0;
		yourVideoSample5.srcObject = cameraStream;
		tempCamera = cameraStream;
		// FINAL : add all the readjust tabs
		//newww - 2 second delay for enabling next buttons
		setTimeout(function () {
			document.getElementById("nextBtn").disabled = false;
			document.getElementById("nextBtn").style.opacity = 1;
			document.getElementById("nextBtn4").disabled = false;
			document.getElementById("nextBtn4").style.opacity = 1;
			document.getElementById("nextBtn19").disabled = false;
			document.getElementById("nextBtn19").style.opacity = 1;
			document.getElementById("nextBtn33").disabled = false;
			document.getElementById("nextBtn33").style.opacity = 1;
			document.getElementById("nextBtn60").disabled = false;
			document.getElementById("nextBtn60").style.opacity = 1;
			document.getElementById("nextBtn63").disabled = false;
			document.getElementById("nextBtn63").style.opacity = 1;
		}, 2000);
	}).catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
}

function detectMediaMain() {
	var cameraProperties = {
		audio: true,
		video: {
			width: { min: 1024, ideal: 1280, max: 1920 },
			height: { min: 576, ideal: 720, max: 1080 }
		}
	};
	navigator.mediaDevices.getUserMedia(cameraProperties).then(function (cameraStream) {
		yourVideo.volume = 0;
		yourVideo.srcObject = cameraStream;
		tempCamera = cameraStream;
		// document.getElementById("recButton").disabled = false;
		// document.getElementById("recButton").style.opacity = 1;
	}).catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
	setTimeout(function () {
		// FINAL : add all video recording pages here
		//newww - 2 second delay for enabling record button - prevents app crash
		document.getElementById("recButton").disabled = false;
		document.getElementById("recButton").style.opacity = 1;
	}, 2000);
}

//Variables for arrays containing relevant task subsets 
var globalPages = [...Array(73).keys(), ...[94]];
var ALSCanPages = [...Array(56).keys(), ...[60], ...Array.from({length:9}, (v,k)=> k + 64), ...[94]];
var NIHPages = [...Array(73).keys(), ...[94]];
var VSPages = [...[0, 1, 2, 3, 4], ...Array.from({length:22}, (v,k)=> k + 73)];
// var VSPages = [...[0, 1, 2, 3, 4], ...[5, 73, 74, 94]];
var TestPages = [0, 1, 2, 3, 4, 5, 6, 94];
// var duration = document.getElementById('duration1');
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab


function showTab(n) {
  // This function will display the specified tab of the form...
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	var right_div = x[n].querySelector("#dude-right");
	var div = right_div.querySelector("#dude-top");
	div.innerHTML = `Page ${currentTab+1} of ${globalPages.length}`;
  //... and fix the Previous/Next buttons:
//  if (n == 0) {
//    document.getElementById("prevBtn").style.display = "none";
//  } else {
//    document.getElementById("prevBtn").style.display = "inline";
//  }
	// uncomment this after design
	flag_cat = document.getElementById("subjectID").value.toUpperCase().includes("VS");
	if (globalPages[currentTab] == 2) {
		// uncomment this for final version
		detectMedia();
		document.getElementById("nextBtn").disabled = true;
		document.getElementById("nextBtn").style.opacity = 0.3;
	}
	// uncomment this after design
	if (globalPages[currentTab] == 3) {
		// uncomment this for final version
		detectMedia();
		document.getElementById("nextBtn4").disabled = true;
		document.getElementById("nextBtn4").style.opacity = 0.3;
	}
	if (globalPages[currentTab] == 4) {
		
	}
	// uncomment this after design
	if (globalPages[currentTab] == 5) {
		$(".disappear-video").appendTo($('.appear-video1'));

	}
	if (globalPages[currentTab] == 6) {
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn6").disabled = true;
		document.getElementById("nextBtn6").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 7) {

		$(".disappear-video").appendTo($('.appear-video2'));	
		// uncomment this for final version
		document.getElementById("nextBtn7").disabled = true;
		document.getElementById("nextBtn7").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 8) {
		task1.pause();
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn8").disabled = true;
		document.getElementById("nextBtn8").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 9) {
		$(".disappear-video").appendTo($('.appear-video3'));
		// uncomment this for final version
		document.getElementById("nextBtn9").disabled = true;
		document.getElementById("nextBtn9").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 10) {
		task2.pause();
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn10").disabled = true;
		document.getElementById("nextBtn10").style.opacity = 0.3;
	}

	if (globalPages[currentTab] == 11) {
		$(".disappear-video").appendTo($('.appear-video4'));
		// uncomment this for final version
		document.getElementById("nextBtn11").disabled = true;
		document.getElementById("nextBtn11").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 12) {
		task3.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn12").disabled = true;
		document.getElementById("nextBtn12").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 13) {
		$(".disappear-video").appendTo($('.appear-video5'));

		// uncomment this for final version
		document.getElementById("nextBtn13").disabled = true;
		document.getElementById("nextBtn13").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 14) {
		task4.pause();
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn14").disabled = true;
		document.getElementById("nextBtn14").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 15) {
		$(".disappear-video").appendTo($('.appear-video6'));

		// uncomment this for final version
		document.getElementById("nextBtn15").disabled = true;
		document.getElementById("nextBtn15").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 16) {
		task5.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn16").disabled = true;
		document.getElementById("nextBtn16").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 17) {
		$(".disappear-video").appendTo($('.appear-video7'));

		// uncomment this for final version
		document.getElementById("nextBtn17").disabled = true;
		document.getElementById("nextBtn17").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 18) {
		task6.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn18").disabled = true;
		document.getElementById("nextBtn18").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 19) {
		// uncomment this for final version
		detectMedia();
	}
	if (globalPages[currentTab] == 20) {
		$(".disappear-video").appendTo($('.appear-video8'));

		// uncomment this for final version
		document.getElementById("nextBtn20").disabled = true;
		document.getElementById("nextBtn20").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 21) {
		task7.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn21").disabled = true;
		document.getElementById("nextBtn21").style.opacity = 0.3;
		
	}

	if (globalPages[currentTab] == 22) {
		$(".disappear-video").appendTo($('.appear-video9'));

		// uncomment this for final version
		document.getElementById("nextBtn23").disabled = true;
		document.getElementById("nextBtn23").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 23) {
		task8.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn24").disabled = true;
		document.getElementById("nextBtn24").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 24) {
		$(".disappear-video").appendTo($('.appear-video10'));

		// uncomment this for final version
		document.getElementById("nextBtn25").disabled = true;
		document.getElementById("nextBtn25").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 25) {
		task9.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn26").disabled = true;
		document.getElementById("nextBtn26").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 26) {
		$(".disappear-video").appendTo($('.appear-video11'));

		// uncomment this for final version
		document.getElementById("nextBtn27").disabled = true;
		document.getElementById("nextBtn27").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 27) {
		task10.pause();
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn28").disabled = true;
		document.getElementById("nextBtn28").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 28) {
		$(".disappear-video").appendTo($('.appear-video12'));

		// uncomment this for final version
		document.getElementById("nextBtn29").disabled = true;
		document.getElementById("nextBtn29").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 29) {
		task11.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn30").disabled = true;
		document.getElementById("nextBtn30").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 30) {
		$(".disappear-video").appendTo($('.appear-video13'));

		// uncomment this for final version
		document.getElementById("nextBtn31").disabled = true;
		document.getElementById("nextBtn31").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 31) {
		task12.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn32").disabled = true;
		document.getElementById("nextBtn32").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 32) {
		// uncomment this for final version
		detectMedia();
		document.getElementById("nextBtn33").disabled = true;
		document.getElementById("nextBtn33").style.opacity = 0.3;
	}
	if (globalPages[currentTab] == 33) {
		//instruction13Play();
		$(".disappear-audio").appendTo($('.appear-audio1'));
		// uncomment this for final version
		document.getElementById("nextBtn34").disabled = true;
		document.getElementById("nextBtn34").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 34) {
		captureMicrophone();
		task13.pause();

		// uncomment this for final version
		document.getElementById("nextBtn35").disabled = true;
		document.getElementById("nextBtn35").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 35) {
		ReleaseMicrophone();
		$(".disappear-video").appendTo($('.appear-video14'));

		// uncomment this for final version
		document.getElementById("nextBtn36").disabled = true;
		document.getElementById("nextBtn36").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 36) {
		task14.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn37").disabled = true;
		document.getElementById("nextBtn37").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 37) {
		$(".disappear-video").appendTo($('.appear-video15'));

		// uncomment this for final version
		document.getElementById("nextBtn38").disabled = true;
		document.getElementById("nextBtn38").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 38) {
		task15.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn39").disabled = true;
		document.getElementById("nextBtn39").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 39) {
		$(".disappear-audio").appendTo($('.appear-audio2'));

		// uncomment this for final version
		document.getElementById("nextBtn40").disabled = true;
		document.getElementById("nextBtn40").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 40) {
		captureMicrophone();
		task16.pause();

		// uncomment this for final version
		document.getElementById("nextBtn41").disabled = true;
		document.getElementById("nextBtn41").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 41) {
		ReleaseMicrophone();
		//duration.innerHTML = "0 s";
		//instruction17Play();
		$(".disappear-audio").appendTo($('.appear-audio3'));

		// uncomment this for final version
		document.getElementById("nextBtn42").disabled = true;
		document.getElementById("nextBtn42").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 42) {
		captureMicrophone();
		task17.pause();

		// uncomment this for final version
		document.getElementById("nextBtn43").disabled = true;
		document.getElementById("nextBtn43").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 43) {
		ReleaseMicrophone();
		//duration.innerHTML = "0 s";
		$(".disappear-audio").appendTo($('.appear-audio4'));

		// uncomment this for final version
		document.getElementById("nextBtn44").disabled = true;
		document.getElementById("nextBtn44").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 44) {
		captureMicrophone();
		task18.pause();

		// uncomment this for final version
		document.getElementById("nextBtn45").disabled = true;
		document.getElementById("nextBtn45").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 45) {
		ReleaseMicrophone();
		//duration.innerHTML = "0 s";
		//instruction19Play();
		$(".disappear-audio").appendTo($('.appear-audio5'));

		// uncomment this for final version
		document.getElementById("nextBtn46").disabled = true;
		document.getElementById("nextBtn46").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 46) {
		captureMicrophone();
		task19.pause();

		// uncomment this for final version
		document.getElementById("nextBtn47").disabled = true;
		document.getElementById("nextBtn47").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 47) {
		ReleaseMicrophone();
		//duration.innerHTML = "0 s";
		$(".disappear-video").appendTo($('.appear-video16'));

		// uncomment this for final version
		document.getElementById("nextBtn48").disabled = true;
		document.getElementById("nextBtn48").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 48) {
		task20.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn49").disabled = true;
		document.getElementById("nextBtn49").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 49) {
		$(".disappear-video").appendTo($('.appear-video17'));

		// uncomment this for final version
		document.getElementById("nextBtn50").disabled = true;
		document.getElementById("nextBtn50").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 50) {
		task21.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn51").disabled = true;
		document.getElementById("nextBtn51").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 51) {
		$(".disappear-video").appendTo($('.appear-video18'));

		// uncomment this for final version
		document.getElementById("nextBtn52").disabled = true;
		document.getElementById("nextBtn52").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 52) {
		task22.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn53").disabled = true;
		document.getElementById("nextBtn53").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 53) {
		$(".disappear-video").appendTo($('.appear-video19'));

		// uncomment this for final version
		document.getElementById("nextBtn54").disabled = true;
		document.getElementById("nextBtn54").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 54) {
		task23.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn55").disabled = true;
		document.getElementById("nextBtn55").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 55) {
		//duration.innerHTML = "0 s";
		$(".disappear-audio").appendTo($('.appear-audio6'));

		// uncomment this for final version
		document.getElementById("nextBtn56").disabled = true;
		document.getElementById("nextBtn56").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 56) {
		captureMicrophone();
		task24.pause();

		// uncomment this for final version
		document.getElementById("nextBtn57").disabled = true;
		document.getElementById("nextBtn57").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 57) {
		ReleaseMicrophone();
		//duration.innerHTML = "0 s";
		$(".disappear-video").appendTo($('.appear-video20'));

		// uncomment this for final version
		document.getElementById("nextBtn58").disabled = true;
		document.getElementById("nextBtn58").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 58) {
		task25.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn59").disabled = true;
		document.getElementById("nextBtn59").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 59) {
		// uncomment this for final version
		detectMedia();
		document.getElementById("nextBtn60").disabled = true;
		document.getElementById("nextBtn60").style.opacity = 0.3;
	}
	if (globalPages[currentTab] == 60) {
		//instruction26Play();
		$(".disappear-video").appendTo($('.appear-video21'));

		// uncomment this for final version
		document.getElementById("nextBtn61").disabled = true;
		document.getElementById("nextBtn61").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 61) {
		task26.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn62").disabled = true;
		document.getElementById("nextBtn62").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 62) {
		// uncomment this for final version
		detectMedia();
		document.getElementById("nextBtn63").disabled = true;
		document.getElementById("nextBtn63").style.opacity = 0.3;
	}
	if (globalPages[currentTab] == 63) {
		$(".disappear-video").appendTo($('.appear-video22'));

		// uncomment this for final version
		document.getElementById("nextBtn66").disabled = true;
		document.getElementById("nextBtn66").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 64) {
		task28.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn67").disabled = true;
		document.getElementById("nextBtn67").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 65) {
		$(".disappear-video").appendTo($('.appear-video23'));

		// uncomment this for final version
		document.getElementById("nextBtn68").disabled = true;
		document.getElementById("nextBtn68").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 66) {
		task29.pause();

		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn69").disabled = true;
		document.getElementById("nextBtn69").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 67) {
		//duration.innerHTML = "0 s";
		$(".disappear-audio").appendTo($('.appear-audio7'));

		// uncomment this for final version
		document.getElementById("nextBtn70").disabled = true;
		document.getElementById("nextBtn70").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 68) {
		captureMicrophone();
		task30.pause();

		// uncomment this for final version
		document.getElementById("nextBtn71").disabled = true;
		document.getElementById("nextBtn71").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 69) {
		ReleaseMicrophone();
		//duration.innerHTML = "0 s";
		$(".disappear-audio").appendTo($('.appear-audio8'));

		// uncomment this for final version
		document.getElementById("nextBtn74").disabled = true;
		document.getElementById("nextBtn74").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 70) {
		captureMicrophone();
		task32.pause();

		// uncomment this for final version
		document.getElementById("nextBtn75").disabled = true;
		document.getElementById("nextBtn75").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 71) {
		ReleaseMicrophone();
		//duration.innerHTML = "0 s";
		$(".disappear-audio").appendTo($('.appear-audio9'));

		// uncomment this for final version
		document.getElementById("nextBtn76").disabled = true;
		document.getElementById("nextBtn76").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 72) {
		captureMicrophone();
		task33.pause();
		// uncomment this for final version
		document.getElementById("nextBtn77").disabled = true;
		document.getElementById("nextBtn77").style.opacity = 0.3;

	}
	// starting Leif's tabs
	if (globalPages[currentTab] == 73) {
		// ReleaseMicrophone();
		// console.log();
		$(".disappear-video").appendTo($('.appear-video24'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn99").disabled = true;
		document.getElementById("nextBtn99").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 74) {
		$(".disappear-video").appendTo($('.appear-video25'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn79").disabled = true;
		document.getElementById("nextBtn79").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 75) {
		$(".disappear-video").appendTo($('.appear-video26'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn80").disabled = true;
		document.getElementById("nextBtn80").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 76) {
		$(".disappear-video").appendTo($('.appear-video27'));
		// uncomment this for final version
		document.getElementById("nextBtn81").disabled = true;
		document.getElementById("nextBtn81").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 77) {
		// uncomment this for final version
		// document.getElementById("nextBtn82").disabled = true;
		// document.getElementById("nextBtn82").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 78) {
		$(".disappear-video").appendTo($('.appear-video28'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn83").disabled = true;
		document.getElementById("nextBtn83").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 79) {
		$(".disappear-video").appendTo($('.appear-video29'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn84").disabled = true;
		document.getElementById("nextBtn84").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 80) {

		// uncomment this for final version
		// document.getElementById("nextBtn85").disabled = true;
		// document.getElementById("nextBtn85").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 81) {
		$(".disappear-video").appendTo($('.appear-video30'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn86").disabled = true;
		document.getElementById("nextBtn86").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 82) {
		$(".disappear-video").appendTo($('.appear-video31'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn87").disabled = true;
		document.getElementById("nextBtn87").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 83) {
		$(".disappear-video").appendTo($('.appear-video32'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn88").disabled = true;
		document.getElementById("nextBtn88").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 84) {

		// uncomment this for final version
		// document.getElementById("nextBtn89").disabled = true;
		// document.getElementById("nextBtn89").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 85) {
		$(".disappear-video").appendTo($('.appear-video33'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn90").disabled = true;
		document.getElementById("nextBtn90").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 86) {
		$(".disappear-video").appendTo($('.appear-video34'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn91").disabled = true;
		document.getElementById("nextBtn91").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 87) {
		$(".disappear-video").appendTo($('.appear-video35'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn92").disabled = true;
		document.getElementById("nextBtn92").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 88) {
		$(".disappear-video").appendTo($('.appear-video36'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn93").disabled = true;
		document.getElementById("nextBtn93").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 89) {
		$(".disappear-video").appendTo($('.appear-video37'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn94").disabled = true;
		document.getElementById("nextBtn94").style.opacity = 0.3;
		
	}
	if (globalPages[currentTab] == 90) {

		// uncomment this for final version
		// document.getElementById("nextBtn95").disabled = true;
		// document.getElementById("nextBtn95").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 91) {
		$(".disappear-video").appendTo($('.appear-video38'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn96").disabled = true;
		document.getElementById("nextBtn96").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 92) {
		$(".disappear-video").appendTo($('.appear-video39'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn97").disabled = true;
		document.getElementById("nextBtn97").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 93) {
		$(".disappear-video").appendTo($('.appear-video40'));
		// uncomment this for final version
		detectMediaMain();
		document.getElementById("nextBtn98").disabled = true;
		document.getElementById("nextBtn98").style.opacity = 0.3;

	}
	if (globalPages[currentTab] == 94) {
		ReleaseMicrophone();
	}

	if (isVideo(globalPages[currentTab])) {
	//detectMedia();
	document.getElementsByClassName("disappear-video")[0].style.display = "block";
	
	// uncomment this for final version - maybe
	// document.getElementById("nextBtn").disabled = true;
	// document.getElementById("nextBtn").style.opacity = 0.3;
	// cameraOn.disabled = false;
	// cameraOn.style.opacity = 1;
	}else{
	document.getElementsByClassName("disappear-video")[0].style.display = "none";
	}
	if (isAudio(globalPages[currentTab])) {

	document.getElementsByClassName("disappear-audio")[0].style.display = "block";

	// uncomment this for final version - maybe
	// document.getElementById("nextBtn").disabled = true;
	// document.getElementById("nextBtn").style.opacity = 0.3;
	}else{
	document.getElementsByClassName("disappear-audio")[0].style.display = "none";
	}
	if (n == (x.length - 1)) {

    document.getElementById("nextBtn").innerHTML = "Submit";
    document.getElementById("nextBtn").style.display = "none";
    //document.getElementById("prevBtn").style.display = "none";
	} else {
	document.getElementById("nextBtn").innerHTML = "Next";
	}
	//... and run a function that will display the correct step indicator:
	fixStepIndicator(n)
}
// var globalPages = Array.from({length: 74}, (_, i) => i + 1)

function nextPrev(n) {
  // This function will figure out which tab to display
	if (currentTab > 1) {
		// uncomment this for final version
		tempCamera.stop();
		show();
		reset();
		showAudio();
		resetAudio();
		document.getElementById("recButton").disabled = true;
		document.getElementById("recButton").style.opacity = 0.3;
		// document.getElementById("countdown-task1").innerHTML = "5 s";
		// document.getElementById("duration1").innerHTML = "0 s";
	}
	$('.meter1').html('Upload' + '<br>' + 'Progress:' + '<br>' + 0 + '%');
	$('.meter1').css("background-color", 'darkblue');
	$('.meter').html('Upload' + '<br>' + 'Progress:' + '<br>' + 0 + '%');
	$('.meter').css("background-color", 'darkblue');
	// document.getElementById("recButton").disabled = true;
	// document.getElementById("recButton").style.opacity = 0.3;
	//task1.pause();
	//task2.pause();
	$('#category').css("background-color", '#E8E8E8');
	$('#subjectID').css("background-color", '#E8E8E8');
	$('#validID').css("display", 'none');
	$('#validGroup').css("display", 'none');
	var x = document.getElementsByClassName("tab");
	// Exit the function if any field in the current tab is invalid:
	if (n == 1 && !validateForm()) return false;
	// Hide the current tab:
	transformed_currentTab = globalPages[currentTab]
	// console.log(globalPages)
	// console.log(transformed_currentTab)
	// console.log(currentTab)
	x[transformed_currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	transformed_currentTab = globalPages[currentTab]
	// add reset codes
	//vid_pause1.pause();
	//vid_pause2.pause();
	//$('.meter').css('width', 0 + '%');
	//$('.meter').html('');
	//$('.meter').css("background-color", 'grey');
	//$('.meter > .done').css("background-color", 'green');
	//$('.meter1').css('width', 100 + '%');
	//$('.meter1').html('');
	//$('.meter1').css("background-color", 'darkblue');
	//$('.meter1 > .done').css("background-color", 'green');
	document.getElementById("your-video").src = '';
	document.getElementById("your-video-sample").src = '';
	document.getElementById("player1").src = '';
	// for video timer uncomment the line below
	// document.getElementById("time").innerHTML = '00:00:000';


	// scroll up at start of new tab
	window.scrollTo(0,0);
	// if you have reached the end of the form...
	if (transformed_currentTab >= x.length) {
	// ... the form gets submitted:
	document.getElementById("regForm").submit();
	return false;
	}
	// Otherwise, display the correct tab:
	showTab(transformed_currentTab);
}
var lookupTable;
$.getJSON("./demo/js/lookup.json", function (lookupTableFinal) {
	lookupTable = lookupTableFinal;
});

function validateForm() {
	// This function deals with validation of the form fields
	var x, y, i, valid_cat = false, valid_id = false;
	x = document.getElementsByClassName("tab");
	y = document.getElementById("subjectID");
	g = document.getElementById("category");
	// A loop that checks every input field in the current tab:
	//console.log(lookupTable[0]);
	//console.log(valid_id);
	for (i = 0; i < lookupTable.length; i++) {
		if (lookupTable[i] === y.value.toUpperCase()) {
			valid_id = true;
		}
	}
	if (!valid_id) {
		$('#subjectID').css("background-color", '#FF9999');
		$('#validID').css("display", 'block');
	}
	if (category.value != "none") {
		valid_cat = true;
	} else {
		$('#category').css("background-color", '#FF9999');
		$('#validGroup').css("display", 'block');
		$('#validGroup').html("<h4>Please Select a Group</h4>");
	}
	// If the valid status is true, mark the step as finished and valid:
	if (valid_cat & valid_id) {
		document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	pid = y.value.toUpperCase();
	if (pid.includes("VS")) {
		globalPages = VSPages
	}
	else if (pid.includes("TIB") || pid.includes("MIB")) {
		globalPages = NIHPages
	}
	else if (pid.includes("PL") || pid.includes("KD")) {
		globalPages = ALSCanPages
	} 
	else if (pid.includes("TESTING")) {
		console.log("MADEIT HERE")
		globalPages = TestPages
	}
	return (valid_cat & valid_id); // return the valid status
}
function fixStepIndicator(n) {
	// This function removes the "active" class of all steps...
	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
  	//... and adds the "active" class on the current step:
	x[n].className += " active";
}