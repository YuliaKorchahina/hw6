const categoriesEl = document.querySelector("#categories");
const listAll = document.querySelectorAll('li.item');
const arr = [...listAll]
console.log(`Number of categories: ${listAll.length}\n\n`);

for( const element of arr) {
    console.log(`Categories: ${element.firstElementChild.textContent}`);
    const elementList = element.lastElementChild;
    const items = [...elementList.children]
    console.log(`Elements: ${items.length}`);
}
