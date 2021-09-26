const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const li = document.createElement('li');

const ingredientsLi = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item')
  return li;
})

document.querySelector('#ingredients').append(...ingredientsLi)
console.log(ingredientsLi);

// const list = document.querySelector('#ingredients');
// const ingredientsLi = ingredients
//   .map(ingredient =>
//   `<li class='item'>${ingredient}</li>`)
//   .join('')

// console.log(ingredientsLi);
// list.innerHTML = ingredientsLi;

