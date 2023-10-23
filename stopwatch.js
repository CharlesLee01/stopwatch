let second = 0;
let minute = 0;
let intervalID;
let isStart;

const startButton = document.querySelector('.js-start-button');
const resetButton = document.querySelector('.js-reset-button');
const time = document.querySelector('.js-time');

startButton.addEventListener('click', () => start());
resetButton.addEventListener('click', () => reset());

function start() {
	if (!isStart) {
		isStart = true;
		intervalID = setInterval(() => {
			displayTime();
			second++;
		}, 1000);
		startButton.innerHTML = 'Stop';
	} else {
		isStart = false;
		clearInterval(intervalID);
		startButton.innerHTML = 'Start';
	}	
}

function displayTime() {
	second = String(second % 60);
	minute = String(Math.floor(second / 60));

	if (second.length === 1) {
		second = '0' + second; 
	}

	if (minute.length === 1) {
		minute = '0' + minute; 
	}
	time.innerHTML = `${minute} : ${second}`;
}

function reset() {
	if (isStart) {
		start();
	}
  	second = 0;
	displayTime();
}