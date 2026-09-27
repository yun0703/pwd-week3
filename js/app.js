"use strict";
const display = document.querySelector('#display');
const expression = document.querySelector('#expression');
const message = document.querySelector('#message');
const buttons = document.querySelectorAll('[data-key]');
function formatDisplay(value) {
    const parts = value.split('.');
    if (!value.includes('e'))
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}
function render() {
    const value = state.waiting ? formatNumber(Number(state.input)) : state.input;
    display.textContent = state.error ? 'Error' : formatDisplay(value);
    message.textContent = state.error;
    expression.textContent = pendingExpression(state);
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const key = button.dataset.key;
        if (key) {
            handleKey(key);
            render();
        }
    });
});
render();
