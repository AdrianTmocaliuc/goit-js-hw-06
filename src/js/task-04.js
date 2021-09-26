let  counterValue = 0;

document.querySelector('#counter').addEventListener('click', e => {
    if (e.target.textContent === '+1')
        counterValue++;
    if (e.target.textContent === '-1' &&
        document.querySelector('#value').textContent >= 1)
        counterValue--;
    
    e.currentTarget.querySelector('#value').textContent = counterValue;
})

// const counterText = document.querySelector('#value');
// let counterValue = parseInt(document.querySelector('#value').textContent);

// console.log(typeof counterValue);
// console.log(counterValue);

// let counterValue = parseInt(document.querySelector('#value').textContent);

// document.querySelector('#counter').addEventListener('click', e => {
//     if (e.target.dataset.action === 'incriment')
//         counterValue++;
//     if (e.target.dataset.action === 'decriment' &&
//         document.querySelector('#value').textContent >= 1)
//         counterValue--;
    
//     // e.currentTarget.querySelector('#value').textContent = counterValue;
// })

// const counter = {
//     counterDisplay: document.querySelector('value'),
//     incrimentBtn: document.querySelector('[data-action="incriment"]'),
//     decrimentBtn: document.querySelector('[data-action="decriment"]'),
// }

// let counterValue = 0;

// const incriment = () => {
//     counterValue++;
//     counter.counterDisplay.textContent = counterValue;
// };

// const decriment = () => {
//     counterValue--;
//     counter.counterDisplay.textContent = counterValue;
// };

// counter.incrimentBtn.addEventListener('click', incriment);
// counter.incrimentBtn.addEventListener('click', decriment);
