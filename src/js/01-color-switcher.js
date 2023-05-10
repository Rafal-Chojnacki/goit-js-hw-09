const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  let intervalId;

  startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

  stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
  });

