const teaTime = document.querySelector('.tea-time');
const audio = document.getElementById('background-music');
const stopAlarm = document.getElementById('stop-alarm');

function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let nowTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return nowTime;
}

setInterval(function () {
  teaTime.innerText = getTime();
}, 1000);

function playBackgroundMusic() {
  if (audio.paused) {
    audio.play();
  }
}

function stopBackgroundMusic() {
  if (!audio.paused) {
    audio.pause();
  }
}

const oraFixa = new Date();
oraFixa.setHours(15, 0, 0);
let nowHour = new Date();

function updateNowHour() {
  nowHour = new Date();
}
let delay = oraFixa - nowHour;

if (delay < 0) {
  oraFixa.setDate(oraFixa.getDate() + 1);
  delay = oraFixa - nowHour;
}

setTimeout(function () {
  playBackgroundMusic();
  updateNowHour();
}, delay);

function updateNowHour() {
  const now = new Date();
  const nowTime =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const fixedTime =
    oraFixa.getHours() * 3600 +
    oraFixa.getMinutes() * 60 +
    oraFixa.getSeconds();

  if (nowTime === fixedTime) {
    stopBackgroundMusic();
  }
}

