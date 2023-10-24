const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function updateCountdown() {
    const currentDay = new Date();
    const newYearDayOne = new Date(new Date().getFullYear() + 1, 0, 1);
    const currentTime = currentDay.getTime();
    const newYearTime = newYearDayOne.getTime();
    const diff = newYearTime - currentTime;

    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor((diff % hour) / minute);
    const seconds = Math.floor((diff % minute) / second);

    const dayEl = document.getElementById("days");
    const hourEl = document.getElementById("hours");
    const minuteEl = document.getElementById("minutes");
    const secondEl = document.getElementById("seconds");

    dayEl.innerText = days;
    hourEl.innerText = hours;
    minuteEl.innerText = minutes;
    secondEl.innerText = seconds;
}

function updateYear() {
    const newYearDayOne = new Date(new Date().getFullYear() + 1, 0, 1);
    const year = document.getElementById("year");
    year.innerText = newYearDayOne.getFullYear();
}

function main() {
    updateYear();
    updateCountdown();
    setTimeout(() => { // Change this to setInterval
        main()
    }, 1000); // Update this to 1000 so it runs every second
}

main();
