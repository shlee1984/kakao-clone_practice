const clockContainer = document.querySelector(".status-bar"),
  clockTitle = document.querySelector(".status-bar-js-clock");

function getTime() {
  const date = new Date();
  const hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  setInterval(getTime, 1000);
}

function init() {
  getTime();
}

init();
