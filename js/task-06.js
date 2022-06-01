// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// 1.Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.
// 2.Если введено подходящее количество символов, то border инпута становится
// зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');
const dataLength = document.querySelector('input[data-length]');
const inputLength = dataLength.dataset.length;
const inputLengthNumber = Number(inputLength);

inputEl.addEventListener('blur', event => {
    if (event.currentTarget.value.length === inputLengthNumber) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});