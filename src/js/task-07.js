
const textAbra = document.querySelector('#text')
const scrollEl = document.querySelector('#font-size-control');

scrollEl.addEventListener('input', e => {
    textAbra.style.fontSize = e.currentTarget.value + 'px';
});


