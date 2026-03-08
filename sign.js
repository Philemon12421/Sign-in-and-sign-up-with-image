const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');

form.addEventListener('submit', (e) => {
    

    let errors = []

    if(firstname_input){
        errors = getSignUpFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
    }
    else{
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if(errors.lenght > 0){
        e.preventDefault ()
    }
})

function getSignUpFormErrors(firstname, email, password, repeatPassword){
   let errors = [] 

   if(firstname === '' || firstname == null){
    errors.push('firstname is required')
    email_input_input.parentElement.classList.add('incorrect')
   }
    if(email === '' || email == null){
    errors.push('email is required')
    firstname_input.parentElement.classList.add('incorrect')
   }
    if(password === '' || password == null){
    errors.push('password is required')
   password_input_input.parentElement.classList.add('incorrect')
   }
   
   return errors;
}