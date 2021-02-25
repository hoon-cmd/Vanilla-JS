const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getTime() {
  const data = new Date();
  const hours = data.getHours();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 5);
}

init();
