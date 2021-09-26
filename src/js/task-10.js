function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('#controls [data-create]');
// console.log(createBtn);
const destroyBtn = document.querySelector('#controls [data-destroy]');

const createDivs = document.querySelector('#boxes')

const numberOfEl = document.querySelector('#controls input');

// console.log(createNumbers);
const createBoxes = (amount) => {
  // amount = numberOfEl.value;
  let styleSize = 30;
  for (let i = 0; i <= amount; i++) {
    let createDiv = document.createElement('div');
    createDiv.style.display = 'inline-block';
    createDiv.style.height = `${styleSize}px`;
    createDiv.style.width = `${styleSize}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    createDivs.append(createDiv);
    styleSize+=10
  }
}

createBtn.addEventListener('click', e => {
  clearAll()
  if (numberOfEl.value === '') alert('Please fill in the fields!');
  createBoxes(numberOfEl.value)
})

const clearAll = () =>
  createDivs.innerHTML = ''

destroyBtn.addEventListener('click', e => {
    clearAll()
  })
