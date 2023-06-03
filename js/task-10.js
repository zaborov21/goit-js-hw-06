const inputRef = document.querySelector("input");
const creatBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector("#boxes");


let divWidth = 20;
let divHeight = 20;

const createBoxes = (amount) => {
  const arr = [];

  for (let i = 1; i <= amount; i += 1) {

    let makeMarkup = `<div style="background-color: ${getRandomHexColor()}; width:${divWidth += 10}px; height:${divHeight += 10}px;"></div>`;
    arr.push(makeMarkup);
  }


  const markup = arr.join("");
  // console.log(markup)
  return boxesRef.insertAdjacentHTML("beforeend", markup);
}


const onDestroyBtnClick = () => {
  boxesRef.innerHTML = "";
}
inputRef.addEventListener("blur", e => {

  const inputValue = e.currentTarget.value;

  creatBtnRef.addEventListener("click", () => {
    createBoxes(inputValue);
  });
});
destroyBtnRef.addEventListener("click", onDestroyBtnClick);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
