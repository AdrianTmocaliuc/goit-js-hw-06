function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());
const changeColorBtn = document.querySelector('.change-color');
const bodyBackground = document.querySelector('body');
const colorIndex = document.querySelector('.color')

changeColorBtn.addEventListener('click', e => {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  colorIndex.textContent = bodyBackground.style.backgroundColor;
  colorIndex.style.color = getRandomHexColor();
})







