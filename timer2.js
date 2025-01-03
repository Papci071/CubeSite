let timerInterval;
let startTime;
let running = false;
let elapsedTime = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = ms % 1000;

    // Minuty będą się pojawiały tylko, gdy czas przekroczy minutę
    const minutes = Math.floor(seconds / 60);
    const formattedSeconds = seconds % 60;

    if (minutes > 0) {
        return `${padZero(minutes)}:${padZero(formattedSeconds)}.${padZero(milliseconds, 3)}`;
    } else {
        return `${padZero(formattedSeconds)}.${padZero(milliseconds, 3)}`;
    }
}

function padZero(num, size = 2) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

function updateTimer() {
    const currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    timerDisplay.textContent = formatTime(elapsedTime);
}

function startTimer() {
    startTime = new Date().getTime() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10); // Aktualizuj co 10 ms
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerDisplay.textContent = "00.000"; // Resetowanie czasu do 0 i bez minut
    startButton.disabled = false;
    stopButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
