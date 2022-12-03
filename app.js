const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
// const now = new Date();
const DEADLINE = new Date("December 05, 2022");

// const time = DEADLINE.getTime() - now.getTime();

// console.log(day, hour, minute, second);
let now, time, day, hour, minute, second;
const updateTimer = function () {};

setInterval(() => {
  now = new Date();
  time = DEADLINE.getTime() - now.getTime();
  day = Math.floor(time / 1000 / 60 / 60 / 24);
  hour = Math.floor(time / 1000 / 60 / 60) % 24;
  minute = Math.floor(time / 1000 / 60) % 60;
  second = Math.floor(time / 1000) % 60;
  days.textContent = "0" + day;
  hours.textContent = hour;
  minutes.textContent = minute;
  seconds.textContent = second;
  if (hour < 10) hours.textContent = "0" + hour;
  if (minute < 10) minutes.textContent = "0" + minute;
  if (second < 10) seconds.textContent = "0" + second;
}, 1000);
