const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];


const elements = ingredients.map(nameOfingredient => {

  const itemEl = document.createElement('li');
  itemEl.classList.add('item');

  const titleEl = document.createElement('h2');
  titleEl.textContent = nameOfingredient;
  itemEl.appendChild(titleEl);

  const ingredientsEl = document.querySelector('#ingredients');
  ingredientsEl.appendChild(itemEl);

  return itemEl;
});
