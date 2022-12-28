//remote-access redirect-animation
let seconds = 60; 
let counter;
function countDownTimer() {
	let display = document.querySelector(".timer");
	display.innerHTML = seconds;
	seconds--;
	if (seconds < 0) {
		clearInterval(counter);
		window.location.href = "https://srmtrichy.knimbus.com";
	}
}		
function startTimer() {
	counter = setInterval(countDownTimer, 1000);
}
startTimer();
	