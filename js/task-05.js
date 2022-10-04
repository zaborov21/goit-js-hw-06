const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input',()=> {
  if (inputEl.value) {
    spanEl.textContent = inputEl.value;
  } else {
    spanEl.textContent = "Anonymous";
  }
});