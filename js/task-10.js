const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-action="create"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxEl = document.querySelector('#boxes');

// console.log(inputEl);
// console.log(createBtn.dataset.action);
// console.log(destroyBtn.dataset.action);

inputEl.addEventListener('input', e => {
  console.log(Number(e.currentTarget.value));
  createBtn.addEventListener('click', () => {
    const makeMarkup = `<div style="background-color: ${getRandomHexColor()}; width: ${divWidth}px; height: ${divHeight}px "></div>`;

    boxEl.insertAdjacentHTML('afterbegin', makeMarkup);
  });
});

destroyBtn.addEventListener('click', destroyBoxes);

let divWidth = 30;
let divHeight = 30;

// function onInputValue(e) {

// //  return Number(e.currentTarget.value);
//   console.log(Number(e.currentTarget.value));
// }
// console.log(onInputValue);

// function createBoxes(amount) {

//       const makeMarkup = `<div style="background-color: ${getRandomHexColor()}; width: ${divWidth}px; height: ${divHeight}px "></div>`;

//       boxEl.insertAdjacentHTML('afterbegin', makeMarkup);

// }

function destroyBoxes() {
  boxEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
