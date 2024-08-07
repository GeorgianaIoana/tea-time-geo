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

const fixedHour = new Date();
fixedHour.setHours(15, 0, 0);
let nowHour = new Date();

function updateNowHour() {
  nowHour = new Date();
}
let delay = fixedHour - nowHour;

if (delay < 0) {
  fixedHour.setDate(fixedHour.getDate() + 1);
  delay = fixedHour - nowHour;
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
    fixedHour.getHours() * 3600 +
    fixedHour.getMinutes() * 60 +
    fixedHour.getSeconds();

  if (nowTime === fixedTime) {
    stopBackgroundMusic();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const recipes = {
    1: 'Monday Chamomile Tea: 1 tsp chamomile flowers, 1 cup boiling water, honey to taste.',
    2: 'Tuesday Green Tea: 1 tsp green tea leaves, 1 cup hot water, lemon slice.',
    3: 'Wednesday Peppermint Tea: 1 tsp dried peppermint leaves, 1 cup boiling water, honey to taste.',
    4: 'Thursday Ginger Tea: 1 tsp grated ginger, 1 cup boiling water, lemon slice, honey to taste.',
    5: 'Friday Hibiscus Tea: 1 tsp dried hibiscus flowers, 1 cup boiling water, honey to taste.',
    6: 'Saturday Black Tea: 1 tsp black tea leaves, 1 cup boiling water, milk and sugar to taste.',
    7: 'Sunday Lemon Balm Tea: 1 tsp dried lemon balm leaves, 1 cup boiling water, honey to taste.',
  };

  let today = new Date().getDay();
  today = today === 0 ? 7 : today; // Convert duminica (0) to 7

  const recipeText = document.getElementById('recipe-text');
  recipeText.innerText = recipes[today];
});
