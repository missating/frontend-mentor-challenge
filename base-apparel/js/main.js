const form = document.querySelector('form');
const emailInput = document.querySelector('.email-box');
const errorMessage = document.querySelector('.email-error-text');
const errorIcon = document.querySelector('.email-error-icon');

const setError = () => {
   emailInput.classList.add('email-error-border');
   errorMessage.classList.remove('hidden');
   errorIcon.classList.remove('hidden');
}

const setSuccess = () => {
   emailInput.classList.remove('email-error-border');
   errorMessage.classList.add('hidden');
   errorIcon.classList.add('hidden');
}

const validateEmail = (email) => {
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

const checkEmail = () => {
   const emailValue = emailInput.value.trim();
   if (emailValue === '' || !validateEmail(emailValue)) {
      setError();
   } else if (validateEmail(emailValue)) {
      setSuccess();
   }
}

form.addEventListener('submit', (event) => {
   event.preventDefault();
   checkEmail();
});
