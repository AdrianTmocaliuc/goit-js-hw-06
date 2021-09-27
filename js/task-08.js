
const formToComplit = document.querySelector('form');
const imputText = document.querySelector('form input');
// console.log(imputText);

formToComplit.addEventListener('submit', e => {
    // const textSubmit = {}
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
    
    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    // return alert(`Email: ${email.value}, Password: ${password.value}`)
    // textSubmit['email'] = email.value;
    // textSubmit['password'] = password.value;
    const textSubmit = {
        email: email.value,
        password: password.value,
    }
    console.log(textSubmit);
    e.currentTarget.reset();
}) 