/* eslint-disable linebreak-style */
/* eslint-disable radix */
/* eslint-disable no-undef */
// 1

const counter = document.querySelector('.counter');

document.querySelector('.add').addEventListener('click', () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});

// 2

setTimeout(() => {
  document.querySelector('#modal').classList.remove('closed');
}, 1000);

document.querySelector('#modal .close').addEventListener('click', () => {
  document.querySelector('#modal').classList.add('closed');
});

// 3

const card = document.querySelector('.card');
const content = document.querySelector('.content');
const heightCenter = card.offsetHeight / 2;
const widthCenter = card.offsetWidth / 2;

card.addEventListener('mousemove', (event) => {
  event.stopPropagation();

  const x = event.pageX - card.offsetLeft;
  const y = event.pageY - card.offsetTop;

  if (y < heightCenter) rotateY = 'rotateX(45deg)';
  else rotateY = 'rotateX(-45deg)';

  if (x > widthCenter) rotateX = 'rotateY(45deg)';
  else rotateX = 'rotateY(-45deg)';

  content.style.transform = `${rotateX} ${rotateY}`;
});

card.addEventListener('mouseleave', () => {
  content.style.transform = '';
});

// 4

setTimeout(() => {
  document.querySelector('#error').classList.remove('closed');

  setTimeout(() => {
    document.querySelector('#error').classList.add('closed');
  }, 3000);
}, 3000);
