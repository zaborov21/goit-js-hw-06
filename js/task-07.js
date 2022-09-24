const inputEl = document.querySelector('input[type="range"]');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onRangeChange);

function onRangeChange(event) {
  spanEl.textContent = event.target.value;
}
