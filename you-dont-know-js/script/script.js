'use strict';


const books = document.querySelector('.books'),
    arrBooks = document.querySelectorAll('.book'),
    body = document.querySelector('body'),
    li = arrBooks[0].querySelectorAll('li'),
    liTwo = arrBooks[5].querySelectorAll('li'),
    ul = arrBooks[2].querySelector('ul'),
    liThree = arrBooks[2].querySelectorAll('li'),
    h2 = arrBooks[4].querySelector('h2'),
    a = h2.querySelector('a'),
    adv = document.querySelector('.adv');

// // console.log(arrBooks);
// console.log(ul);
// console.log(liThree);

// Восстановить порядок книг.

arrBooks[1].insertAdjacentElement('afterend', arrBooks[0]);
arrBooks[0].insertAdjacentElement('afterend', arrBooks[4]);
arrBooks[5].insertAdjacentElement('afterend', arrBooks[2]);
// Заменить картинку заднего фона на другую из папки image

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
a.textContent = 'Книга 3. this и Прототипы Объектов';

// Удалить рекламу со страницы
adv.remove();
// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)


li[3].insertAdjacentElement('afterend', li[6]);
li[6].insertAdjacentElement('afterend', li[8]);
li[5].insertAdjacentElement('afterend', li[7]);
li[9].insertAdjacentElement('afterend', li[2]);

liTwo[1].insertAdjacentElement('afterend', liTwo[9]);
liTwo[4].insertAdjacentElement('afterend', liTwo[2]);
liTwo[7].insertAdjacentElement('afterend', liTwo[5]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

let newLi = liThree[5].cloneNode(true);
newLi.textContent = 'Глава 8: За пределами ES6';
liThree[8].insertAdjacentElement('afterend', newLi);

