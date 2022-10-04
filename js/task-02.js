const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];


const elements = ingredients.map(nameOfingredient => {

  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = nameOfingredient;

  return itemEl;
});
const ingredientsEl = document.querySelector('ul');
ingredientsEl.append(...elements);