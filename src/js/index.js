/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-console */
// 1

const kilometers = 36;
const meters = 20;
console.log(`${kilometers} км/ч соответствуют ${kilometers / 3.6} м/с`);
console.log(`${meters} м/с соответствуют ${meters * 3.6} км/ч`);

// 2

const a = 2;
const b = 2;
const c = 3;

if (a < (b + c) && b < (a + c) && c < (a + b)) {
  console.log('треугольник существует');
  const p = (a + b + c) / 2;
  const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log(`периметр = ${p * 2}`);
  console.log(`Площадь = ${s}`);
  console.log(`соотношение = ${p / s}`);
} else {
  console.log('треугольника не существует');
}

// 3

const n = parseInt(prompt('Введите число'));

if (n) {
  console.log('0 buzz');
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) console.log(`${i} fizz buzz`);
    else if (i % 2 === 0) console.log(`${i} buzz`);
    else console.log(`${i} fizz`);
  }
} else {
  console.log('Введено не число!');
}

// 4

let str = '';

for (let i = 1; i < 13; i++) {
  if (i % 2 === 0) str += '#'.repeat(i);
  else str += '*'.repeat(i);
  str += '\n';
}

str += '||';
console.log(str);

// 5

const r = 6;
let N = prompt('Угадайте число');

while (N != r) {
  if (N > r) console.log('ваше число больше');
  else console.log('ваше число меньше');
  N = prompt('Угадайте число');
}

console.log('угадано');

// 6

const n1 = prompt('Введите n');
const x = prompt('Введите x');
const y = prompt('Введите y');
const result = n1 % x === 0 && n_ % y === 0;
console.log(`n = ${n1}, x = ${x}, y = ${y} => ${result}`);

// 7

const month = 2;
console.log(`месяц ${month} => ${Math.round(month / 4)} квартал`);
