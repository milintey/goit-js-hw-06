// Задание 1
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных
//    в него < li >).

// В результате, в консоли будут выведены такие сообщения.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const category = document.querySelectorAll('.item');
console.log(`Number of categories: ${category.length}`);

for (const item of category) {
    console.log(`Category: ${item.firstElementChild.textContent}`);

    const ilemList = item.querySelectorAll('li');
    console.log(`Elements: ${ilemList.length}`);
}

