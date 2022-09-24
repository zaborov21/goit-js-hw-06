const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');


buttonEl.addEventListener('click', onButtonClick);


function onButtonClick (event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}