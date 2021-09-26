const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', e => {
    if (e.currentTarget.value === '')
        return outputText.textContent = 'Anonymous';
    return outputText.textContent = e.currentTarget.value;
});