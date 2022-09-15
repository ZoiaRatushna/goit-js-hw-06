// /*
// 1.Используя конструкцию if..else и prompt, напиши код, 
// который будет спрашивать: 
// "Какое официальное название JavaScript?". 
// Если пользователь вводит ECMAScript, 
// то показывай alert со строкой "Верно!", 
// в противном случае - "Не знаете? ECMAScript!"
// */

// // const askClient = prompt("Какое официальное название JavaScript?");
// // if (askClient) {
// //   askClient.toLowerCase() === "ECMAScript".toLowerCase()
// //     ? alert("Верно!")
// //     : alert("Не знаете? ECMAScript!");
// // }

/*
2.Напиши скрипт для отображения часов и минут в 
консоли браузера в виде строки формата 
"14 ч. 26 мин.". Если значение переменной 
minutes равно 0, то выводи строку "14 ч.", без минут.
*/

const hours = 14;
const minutes = 0;

if (minutes > 0) {
  console.log(`${hours}ч. ${minutes}мин.`);
} else {
  console.log(`${hours}ч.`);
}

/*
3.Напиши скрипт, который выводит в консоль строку 
"Это положительное число", если в prompt 
пользователь ввел число больше нуля. 
Если был введен ноль, выводи в консоль 
строку "Это ноль". Если передали отрицательное число, 
в консоли должна быть строка "Это отрицательное число".
*/

// const numberPrompt = prompt("Введите число");
// if (numberPrompt && Number(numberPrompt)) {
//   if (numberPrompt > 0) {
//     console.log("Это положительное число");
//   } else if (numberPrompt < 0) {
//     console.log("Это отрицательное число");
//   } else {
//     console.log("Это ноль");
//   }
// } else {
//   console.log("Неверный формат данных");
// }

/*
TODO: написать if...else дома
4. Напиши скрипт для отображения времени дедлайна 
сдачи проекта. Используй конструкцию if...else.
Eсли до дедлайна 0 дней - выведи строку "Сегодня"
Eсли до дедлайна 1 день - выведи строку "Завтра"
Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
*/

const daysUntilDeadline = 0;

switch (daysUntilDeadline) {
  case 0:
    console.log("Сегодня");
    break;
  case 1:
    console.log("Завтра");
    break;
  case 2:
    console.log("Послезавтра");
    break;
  default:
    console.log("Дата в будущем");
}

/*
5. Выполни рефакторинг кода задачи номер 5 
используя switch.
*/

/*
    6.Напиши цикл for который выводит в консоль 
    браузера числа по возрастанию от min до max, 
    но только если число кратное 5.
*/

const max = 100;
const min = 20;

for (let i = max; i >= min; i--) {
  console.log(i);
}

// Решение 1
for (let i = min; i <= max; i++) {
  if (i % 5 === 0) {
    // console.log(i);
  }
}

// Решение 2 - не очень решение

for (let i = min; i <= max; i += 5) {
  //   console.log(i);
}

// Решение 3

for (let i = min; i <= max; i++) {
  if (i % 5 !== 0) continue;
  //   console.log(i);
}

// --------------

// var - ES5
// let и const - ES6

const x = 0;
var y = 7;

if (true) {
  const x = 5;
  var y = 10;
}

// console.log(x);
// console.log(y);


