const inputEl = document.querySelector('input[type="range"]');
const spanEl = document.querySelector('#text');

console.log(spanEl);

console.log(inputEl);

inputEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange(e) {
  const textSize = e.target.value;
  spanEl.style.fontSize = `${textSize}px`;
}