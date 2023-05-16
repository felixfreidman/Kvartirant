const timers = document.querySelectorAll('.message-time');
const formContainer = document.querySelectorAll('.chat-form');
function modifyTime() {
    timers.forEach(timer => {
        let timerValue = timer.textContent;
        timerValue = timerValue.slice(11, 17);
        timer.textContent = timerValue;
    })
}

modifyTime();



