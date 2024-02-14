import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector("input[name='email']");
const message = form.querySelector("textarea[name='message']");
const buttonSubmit = document.querySelector("button[type='submit']");

// Śledzenie w localStorage zdarzenia na 'input" i każdorazowe zapisywanie wartości wpisywanych w email i message.
// localStorage ma się aktualizować co 500 ms.
form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: email.value,
        message: message.value,
      })
    );
    buttonSubmit.disabled = !(email.value && message.value);
  }, 500)
);

const localStorageFcn = () => {
  const store = localStorage.getItem('feedback-form-state');
  if (store) {
    const jsonTransition = JSON.parse(store);
    email.value = jsonTransition.email;
    message.value = jsonTransition.message;
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log({
    email: email.value,
    message: message.value,
  });

  form.reset();
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
  buttonSubmit.disabled = true;
});

localStorageFcn();
