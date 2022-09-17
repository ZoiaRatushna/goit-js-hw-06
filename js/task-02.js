// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientListEl = document.quarySelector(#ingredients);

const items = ingredients.map((item) => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("item");
  items.textContent.add = item;
  return itemsEl;
});

console.log(items);

ingredientListEl.append(...items);