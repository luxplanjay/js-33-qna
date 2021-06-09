const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

function getRangomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
