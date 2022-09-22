// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і 
// виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії
// (усіх < li >, вкладених в нього).

const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories : ${categoriesList.length}`);

for (let i = 0; i < categoriesList.length; i += 1) {

    const categoryTitle = categoriesList[i].firstElementChild.textContent;

    const itemNumber = categoriesList[i].lastElementChild.children.length;;

    console.log(`Category:${categoryTitle}`);
    console.log(`Elements: ${itemNumber}`);
}