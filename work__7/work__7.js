// Напиши скрипт, который реагирует на изменение значения input#font - size - control
// (событие input) и изменяет инлайн - стиль span#text обновляя
// свойство font - size.В результате при перетаскивании ползунка будет меняться
// размер текста.

const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const onFontSize = inputEl.addEventListener('input', event => {
    return spanText.style.fontSize = event.currentTarget.value + "px";
});