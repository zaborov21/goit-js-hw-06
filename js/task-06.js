const inputEl = document.querySelector('#validation-input');
const requiredLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

  if (event.currentTarget.value.length === requiredLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
  }
}
