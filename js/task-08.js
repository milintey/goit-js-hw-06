// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');
const emailElement = document.querySelector('input[type="email"]');
const passwordElement = document.querySelector('input[type="password"]')

let user = {
    email: "",
    password: "",
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    if (emailElement.value === "" || passwordElement.value === "") {
        console.log("Пожалуйста заполните все поля!")
    } else {
        user.email = emailElement.value;
        user.password = passwordElement.value;
    }

    event.currentTarget.reset();
    console.log(user);
}

