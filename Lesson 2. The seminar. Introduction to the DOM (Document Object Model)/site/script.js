// Задание 1

const idBlock = document.querySelector('#block p:first-child')
console.log(idBlock);

const wwwP = document.querySelector('.www')
console.log(wwwP);

// Задание 2

const linkElem = document.querySelector('.link')
linkElem.textContent = 'link text js'
linkElem.href = 'https://developer.mozilla.org/ru/'

const phonoElem = document.querySelector('.photo')
phonoElem.src = 'https://img.freepik.com/free-vector/abstract-red-geometric-polygonal-background_1035-18006.jpg?t=st=1731513891~exp=1731517491~hmac=acb7897c61b52c8a5d00f8fdd7aa0143265a4c4c2ee8fdb0520ce052795a1999&w=1380'
phonoElem.onclick = function () {
    phonoElem.src = 'https://previews.123rf.com/images/rawpixel/rawpixel1612/rawpixel161233094/67364494-stamp-post-correspondence-communication-memories-concept.jpg'
}

//Задание 3

const contentEl = document.querySelector('.content');
const divEl = document.createElement('div')


const contentText = document.createElement('p')
const headerEl = document.createElement('h2')
const imgEl = document.createElement('img')

contentEl.appendChild(imgEl)
contentEl.appendChild(divEl)

headerEl.textContent = 'Заголовок с JS'
contentText.textContent = 'Новый текстовый элемент'
divEl.appendChild(headerEl)
divEl.appendChild(contentText)
// contentText.remove()

//Задание 4
const buttonEl = document.createElement('button')
const pEl = document.createElement('p')
const h1El = document.createElement('h1')
let count = 0;
h1El.textContent = 'Счетчик кликов'
pEl.textContent = `Вы нажали на кнопку 0 раз`
contentEl.append(h1El)
contentEl.append(pEl)
buttonEl.textContent = 'klick'
contentEl.append(buttonEl)
buttonEl.onclick = function () {
    console.log(++count);
    pEl.textContent = `Вы нажали на кнопку ${count} раз`
};


const buttonOT = document.createElement('button')
buttonOT.textContent = 'Отправить'
contentEl.append(buttonOT)
buttonOT.onclick = () => {
    buttonOT.textContent = 'Текст отправиль'
}

