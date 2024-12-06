// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

//1
// console.log(agree); // js сам ловит id-шники
// myForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const checkbox = document.getElementById('agree');
//     const errorMessage = document.getElementById('error-message');

//     errorMessage.textContent = checkbox.checked ? '' : 'Необходимо согласиться с условиями';
//     // if (!checkbox.checked) {
//     // errorMessage.textContent = 'Необходимо согласиться с условиями';
//     // } else {
//     // errorMessage.textContent = '';
//     // // По идее, здесь должен быть код для отправки формы.
//     // }
// });
// document.getElementById('myForm').addEventListener('submit', function(event) {
// event.preventDefault();
// const checkbox = document.getElementById('agree');
// const errorMessage = document.getElementById('error-message');

// if (!checkbox.checked) {
// errorMessage.textContent = 'Необходимо согласиться с условиями';
// } else {
// errorMessage.textContent = '';
// // По идее, здесь должен быть код для отправки формы.
// }
// });



// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести сообщение “Кофе закончился”

//2
// const form = document.querySelector(".form");
// const btnTea = document.querySelector("#tea");
// const btnCoffee = document.querySelector("#coffee");
// const btnEl = document.querySelector("#submit");
// const massege = document.querySelector(".massege");
// form.addEventListener("submit", (e) => {
// e.preventDefault();
// if (btnTea.checked) {
// massege.textContent = `Чай закончился1`;
// }
// if (btnCoffee.checked) {
// massege.textContent = `Кофе закончился`;
// }
// });


// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
// 3