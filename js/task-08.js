const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('submit', (event) => { 

    event.target.reset(); 
    });

function onFormSubmit (event) {

    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    }

    console.log(formData);
}