/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
// 1

function convertSpeed(speed, units) {
  if (units === 'toMS') return `${speed / 3.6} м/с`;
  if (units === 'toKMH') return `${speed * 3.6} км/ч`;
}

console.log(convertSpeed(36, 'toMS'));
console.log(convertSpeed(36, 'toKMH'));

// 2

function absValue(n) {
  if (n < 0) return -n;
  return n;
}

console.log(absValue(-2));
console.log(absValue(100));
console.log(absValue(0));

// // 3

const student = {
  group: 201,
  last_name: 'Иванов',
  first_name: 'Иван',
};

console.log(`Список свойств: ${Object.keys(student).join(', ')}`);
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);

// // 4

function randomNumber(a, b) {
  return a + Math.round(Math.random() * (b - a));
}

console.log(randomNumber(0, 10));
console.log(randomNumber(-10, 10));

// // 5

function sampleArray(array, n) {
  const list = [];

  for (let i = 0; i < n; i++) {
    const index = randomNumber(0, array.length - 1);
    list.push(array[index]);
  }

  return list;
}

console.log(sampleArray([1, 2, 3, 4], 2));
