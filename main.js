function Timer() {
    this.startTime = null;
    this.stopTime = null;
    this.interval = null;
}

Timer.prototype = {
    start() {
        this.startTime = new Date();
        console.log(this.startTime);
    },
    stop() {
        this.stopTime = new Date();
        console.log(this.stopTime);
        this.interval = this.stopTime - this.startTime;
        console.log('Прошло ' + this.interval + ' ms');
    }
}

const myTimer = new Timer;

const startButton = document.querySelector('#start');
startButton.addEventListener('click', () => { myTimer.start() });

const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', () => { myTimer.stop() });
