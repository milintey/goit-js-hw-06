// Счетчик состоит из спана и кнопок, которые, при клике, должны
// увеличивать и уменьшать его значение на единицу.

// 1.Создай переменную counterValue в которой будет храниться текущее
// значение счетчика и инициализируй её значением 0.
// 2.Добавь слушатели кликов на кнопки, внутри которых увеличивай или
// уменьшай значение счтетчика.
// 3.Обновляй интерфейс новым значением переменной counterValue.





// const counterValue = 0;

// const CounterPlugin = function ({ rootSelector, counterValue = 0, step = 1 } = {}) {
//     this.rootSelector = rootSelector;
//     this.value = counterValue;
//     this.step = step;

//     this.EventsBtn();
// };

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const valueText = document.querySelector('#value');
// const incrementBtn = document.querySelector('[data-action="increment"]');

// CounterPlugin.prototype.EventsBtn = function () {
//     incrementBtn.addEventListener('click', () => {
//         this.increment();
//         this.updateValue();
//     });

//     decrementBtn.addEventListener('click', () => {
//         this.decrement();
//         this.updateValue();
//     });
// };

// CounterPlugin.prototype.increment = function() {
//     this.value += this.step;
// };

// CounterPlugin.prototype.decrement = function() {
//     this.value -= this.step;
// };

// CounterPlugin.prototype.updateValue = function () {
//     valueText.textContent = this.value;
// };

// new CounterPlugin({ rootSelector: counter, step: 1 });