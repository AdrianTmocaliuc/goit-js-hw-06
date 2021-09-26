
const inputContent = document.querySelector('#validation-input');
// const inputLength = inputContent.
inputContent.addEventListener('blur', e => {
    e.currentTarget.classList.remove('valid', 'invalid');
    if (e.currentTarget.value.length === parseInt(e.currentTarget.dataset.length)) {
        e.currentTarget.classList.add('valid');
    } else {
        e.currentTarget.classList.add('invalid');
    }
});