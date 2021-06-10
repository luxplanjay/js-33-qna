const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

createPaletteItems(50);

colorPalette.addEventListener('click', selectColor);

function selectColor(event) {
  const { color } = event.target.dataset;
  if (!color) {
    return;
  }
  updateOutput(color);
}

function createPaletteItems(amount) {
  const items = [];
  for (let i = 0; i < amount; i++) {
    const color = getRangomColor();
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.color = color;
    button.classList.add('item');
    button.style.backgroundColor = color;
    items.push(button);
  }
  colorPalette.append(...items);
}

function updateOutput(color) {
  output.style.color = color;
  output.textContent = `SELECTED COLOR: ${color}`;
}

function getRangomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
