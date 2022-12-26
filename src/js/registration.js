/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */

const input = document.querySelector('#password');
const button = document.querySelector('#show');

button.addEventListener('pointerup', () => {
  input.type = 'password';
});

button.addEventListener('pointerdown', () => {
  input.type = 'text';
});

const form = document.forms[1];
const modal = document.querySelector('.modal');
const error = document.querySelector('#error');

function showNotification() {
  const notification = document.querySelector('.notify');
  notification.classList.add('active');
  setTimeout(() => {
    notification.classList.remove('active');
  }, 3000);
}

function openModal() {
  modal.classList.add('active');
  document.body.classList.add('fixed');
}

function closeModal(event, option = false) {
  if (event.currentTarget === event.target || option) {
    modal.classList.remove('active');
    document.body.classList.remove('fixed');

    for (let i = 0; i < 3; i++) {
      form[i].value = '';
    }
  }
}

document.querySelector('#registration').addEventListener('click', openModal);

document.querySelectorAll('.modal-close').forEach((element) => {
  element.addEventListener('click', closeModal);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.table(Object.fromEntries(new FormData(form).entries()));
  showNotification();
  closeModal(option = true);
});

document.querySelectorAll('.form__input').forEach((element) => {
  element.addEventListener('blur', () => {
    element.setCustomValidity('');
    element.reportValidity();

    if (element.checkValidity()) error.textContent = '';
  });

  element.addEventListener('invalid', () => {
    if (element.validity.patternMismatch && element.name === 'name') {
      element.setCustomValidity('Пожалуйста, используйте буквы для ввода имени.');
      error.textContent = 'Пожалуйста, используйте буквы для ввода имени.';
    }

    if (element.validity.tooShort && element.name === 'name') {
      element.setCustomValidity('Минимальная длина имени - 2 буквы.');
      error.textContent = 'Минимальная длина имени - 2 буквы.';
    }

    if (element.validity.valueMissing && element.name === 'name') {
      element.setCustomValidity('Пожалуйста, введите имя.');
      error.textContent = 'Пожалуйста, введите имя.';
    }

    if (element.validity.valueMissing && element.name === 'password') {
      element.setCustomValidity('Пожалуйста, введите пароль.');
      error.textContent = 'Пожалуйста, введите пароль.';
    }

    if (element.validity.tooShort && element.name === 'password') {
      element.setCustomValidity('Минимальная длина пароля - 6 символов.');
      error.textContent = 'Минимальная длина пароля - 6 символов.';
    }

    if (element.validity.valueMissing && element.name === 'email') {
      element.setCustomValidity('Пожалуйста, используйте буквы для ввода имени.');
      error.textContent = 'Пожалуйста, введите E-mail.';
    }
  });
});
