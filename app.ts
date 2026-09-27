const display = document.querySelector<HTMLOutputElement>('#display')!;
const expression = document.querySelector<HTMLParagraphElement>('#expression')!;
const message = document.querySelector<HTMLParagraphElement>('#message')!;
const buttons = document.querySelectorAll<HTMLButtonElement>('[data-key]');

function formatDisplay(value: string): string {

  const parts = value.split('.');
  if (!value.includes('e')) parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

function render(): void {
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