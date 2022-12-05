const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elementOfCategories = document.querySelector('#ingredients'); 
console.log(elementOfCategories); 
const elements = ingredients.map((element) => { 
  const li = document.createElement('li') 
  li.classList.add("item"); 
  li.textContent = element; 
  return li 
}); 
 
elementOfCategories.append(...elements)
