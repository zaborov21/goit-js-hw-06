// Number of categories

const categoriesEl = document.querySelector('#categories');
const numberOfCategoriesEl = categoriesEl.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategoriesEl.length);

// Find the names of all categories
const categoryNameEl = document.querySelectorAll('h2');

// Find lists of all categories
const itemsOfCategoryEl = document.querySelectorAll('.item ul');

// Category: Animals

const quantityOfAnimalsEl = itemsOfCategoryEl[0].children;
console.log('Category:', categoryNameEl[0].textContent);
console.log('Elements:', quantityOfAnimalsEl.length);

// Category: Products

const quantityOfProductsEl = itemsOfCategoryEl[1].children;
console.log('Category:', categoryNameEl[1].textContent);
console.log('Elements:', quantityOfProductsEl.length);


// Category: Technologies

const quantityOfTechnologiesEl = itemsOfCategoryEl[2].children;
console.log('Category:', categoryNameEl[2].textContent);
console.log('Elements:', quantityOfTechnologiesEl.length);