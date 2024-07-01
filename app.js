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
document.addEventListener('DOMContentLoaded', function () {
  const recipes = {
    1: 'Chamomile Tea: 1 tsp chamomile flowers, 1 cup boiling water, honey to taste.',
    2: 'Green Tea: 1 tsp green tea leaves, 1 cup hot water, lemon slice.',
    3: 'Peppermint Tea: 1 tsp dried peppermint leaves, 1 cup boiling water, honey to taste.',
    4: 'Ginger Tea: 1 tsp grated ginger, 1 cup boiling water, lemon slice, honey to taste.',
    5: 'Hibiscus Tea: 1 tsp dried hibiscus flowers, 1 cup boiling water, honey to taste.',
    6: 'Black Tea: 1 tsp black tea leaves, 1 cup boiling water, milk and sugar to taste.',
    0: 'Lemon Balm Tea: 1 tsp dried lemon balm leaves, 1 cup boiling water, honey to taste.' // duminica
  };

  let today = new Date().getDay();
  today = today === 0 ? 7 : today; // Convert duminica (0) to 7

  const recipeText = document.getElementById('recipe-text');
  recipeText.innerText = recipes[today];
});
