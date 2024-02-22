// let a = 1;
// console.log(a);
// a = "test";
// console.log(a);

//? часовая ставка
// const payRateUSD = 80;
// const projectHours = 40;
// const availableHours = (11 - 2) * 5;
// console.log(`Смогу лия работать? ${availableHours > projectHours}`);
// console.log(`Стоимость работы: ${projectHours * payRateUSD}$`);

// const money = 100;
// const canBay = money > 50;
// if (canBay) {
//   console.log("Может купить наш продукт");
// } else if (money > 55) {
//   console.log("Куплен мини продукт");
// } else {
//   console.log("Не хватает баланса");
// }
// console.log("Итог");

//? Размещения депозита
// const deposit = 12000;
// const rate = 0.07;
// const depositLength = 24;
// const houseCost = 13500;

// const res = deposit * (1 + rate / 12) ** 24;
// if (res > houseCost) {
//   console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}`);
// } else {
//   console.log(`Мы накопили: ${res}. Купить не сможем (((`);
// }

//? Проверка робота
// let prom = prompt("Сколько будет 7 + или - 15?", 0);
// switch (prom) {
//   case "22":
//   case "-8":
//   case "Я не робот":
//     console.log("Успех");
//     break;
//   default:
//     console.log("Вы робот!");
// }

// switch (true) {
//   case prom === "Я не робот":
//   case Number(prom) === 22:
//   case Number(prom) === -8:
//     console.log("Успех");
//     break;
//   default:
//     console.log("Вы робот!");
// }
//? Булева логика
// const isAdmin = true;
// const canWrite = true;
// console.log(`Системный файл ${isAdmin && canWrite}`);
// console.log(`Обычный файл ${isAdmin || canWrite}`);
// console.log(`Инвертируем права админа ${!isAdmin}`);
// const isEdited = true;
// const isSuperAdmin = true;

// console.log(
//   `Системный файл с редактированием ${
//     isAdmin && canWrite && (!isEdited || isSuperAdmin)
//   }`
// );
// let a = 7;
// if (a === -8 || a === 22) {
// }

//? Операторы с другими типами
// console.log("Вася" || "Олег");
// console.log(false || "Олег");
// console.log("Вася" || false);
// console.log(false || false);

// console.log("Вася" && "Олег");
// console.log(false && "Олег");
// console.log("Вася" && false);
// console.log(false && false);

// let a = "Марина";
// const username = a || "Петя";
// console.log(username);
// const isAdmin = false;
// const filename = (isAdmin && "file.mp4") || "kek";
// console.log(filename);

//? Оператор нулевого слияния
// let userName = "Вася";
// let userSurName = 0;
// let age = 0;
// console.log(userName || "Default User name");
// console.log(userSurName ?? "Default User name");
// console.log(age || 18);
// console.log(age ?? 18);

//? Проверка прав
// const balance = 100;
// const bonusBalance = 900;
// const isBanned = false;
// const isExist = false;
// const isSelling = true;
// let canBuy =
//   (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;
// console.log(`Могу купить игру: ${canBuy ? "Да" : "Нет"}`);

//? Введение в функции
// function countDepositSum(depositInUSD, month, rate) {
//   return depositInUSD * (1 + rate / 12) ** month;
// }
// const example1 = countDepositSum(1000, 24, 0.12);
// console.log(example1);
// console.log(countDepositSum(1000, 48, 0.1));

//? Анонимные функции
// const poft = function (num) {
//   return num * num;
// };
// console.log(poft(6));

//? Стрелочные функции
// function powerOfTwo(num) {
//   console.log(num);
//   return num * num;
// }
// console.log(powerOfTwo(5));
// const poft = (num) => num * num;
// console.log(poft(6));

//? Упражнение - Упрощение функции
// function toPower(num, power) {
//   const res = num ** power;
//   return res;
// }
// console.log(toPower(2, 3));
// const toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(2, 5));

//? Параметры по умолчанию
// function toPower(num, power = 2) {
//   const res = num ** power;
//   return res;
// }
// // function toPower(num, power) {
// //   const power2 = power ?? 2;

// //   const res = num ** power2;
// //   return res;
// // }
// console.log(toPower(2, 3));
// console.log(toPower(2));

//? Условия в функциях
// function canAccessWebsite(age) {
//   if (age < 18) {
//     return "Нет";
//   }
//   return "Да";
// }
// console.log(canAccessWebsite(19));

// const canAccessWebsite2 = (age) => (age < 18 ? "Нет" : "Да");
// console.log(canAccessWebsite2(19));

//? Функции в функциях
// const KG_IN_USD = 7;
// const KM_IN_USD = 5;

// function calculateW(present) {
//   return present * KG_IN_USD;
// }
// function calculateKm(distance) {
//   return distance * KM_IN_USD;
// }
// function getExchangePrice(present1, present2, distance) {
//   const price1 = calculateW(present1);
//   const price2 = calculateW(present2);
//   const distancePrice = calculateKm(distance);
//   return price1 + price2 + distancePrice;
// }
// console.log(getExchangePrice(1, 2, 10));

//? Упражнение - Кредит на MacBook
// const userAge = 27;
// const hasJob = true;
// const userMoney = 1500;
// const macBook = 2000;

// function computeCredit(age, hasJob = false) {
//   switch (true) {
//     case age > 24 && hasJob:
//       return 500;
//     case age > 24:
//       return 100;
//     default:
//       return 0;
//   }
// }
// function canBuy(productPrice, age, money, hasJob = false) {
//   const creditMoney = computeCredit(age, hasJob);
//   return productPrice <= money + creditMoney;
// }
// console.log(canBuy(macBook, userAge, userMoney, hasJob));

//? Массивы
// const tasks = ["Задача 1", "Задача 2", "Задача 3"];
// console.log(tasks);

// function pushToTask(el) {
//   tasks.push(el);
// }
// pushToTask("wkwwk");
// console.log(tasks);

// function removeTask(el) {
//   const index = tasks.indexOf(el);
//   if (index === -1) {
//     return;
//   }
//   return tasks.splice(index, 1);
// }
// removeTask("Задача 1");
// console.log(tasks);

// function transferTask(el) {
//   const result = removeTask(el);
//   if (!result) {
//     return;
//   }
//   tasks.unshift(result[0]);
// }
// transferTask("Задача 3");
// console.log(tasks);

//? Деструктуризация
// const userData = ["Alex", 18, "Krasnodar"];
// const [userName, _, city] = userData;
// console.log(userName, city);

// const data = [1, 2, 3, 4, 5, 6];
// const [one, two, ...others] = data;
// console.log(one, two, others);

//? Функция разбора URL
// const url = "https://purpleschool.ru/course/javascript";
// const url2 = "purpleschool.ru/course/javascript";
// function spread(url) {
//   const [protocol, _, host, ...path] = url.split("/");
//   if (protocol === "https:" || protocol === "http:") {
//     if (!host.includes(".")) {
//       return;
//     }
//     console.log(protocol, _, host, path);
//     console.log(protocol.split(":")[0]);
//     console.log(host);
//     console.log(`/${path.join("/")}`);
//   }
// }
// console.log(spread(url));
// console.log(spread(url2));

//? Циклы
// const tasks = ["Задача 1", "Задача 2", "Задача 3"];
// for (let i = 0; i < tasks.length; i++) {
//   if (tasks[i] === "Задача 2") {
//     continue;
//   }
//   console.log(tasks[i]);
// }

// const arr = ["!", "JS", "люблю", "Я"];
// const resArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   resArr.push(arr[i]);
// }
// console.log(resArr.join(" "));

// for (let i = 1; i < 5; i++) {
//   console.log(`Цикл 1 - ${i}`);
//   for (let j = 1; j < 5; j++) {
//     console.log(`Цикл 2 - ${j}`);
//   }
// }

// const tasks = [
//   [1, "Задача 1"],
//   [2, "Задача 2"],
// ];

// for (let i = 0; i < tasks.length; i++) {
//   for (let j = 0; j < tasks[i].length; j++) {
//     console.log(tasks[i][j]);
//   }
// }

// let i = 1;
// while (i < 5) {
//   console.log(`Цикл 1 - ${i}`);
//   i++;
// }

// const arr = [1, 4, 8, 7];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 5) {
//     break;
//   }
//   console.log(arr[i]);
// }
// let i = 0;
// while (arr[i] <= 5 && i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 2);

// const arr = [1, 4, 8, 7];
// for (let element of arr) {
//   console.log(element);
// }

// for (let index in arr) {
//   console.log(arr[index]);
// }

//? Расчёт итогового баланса
// const openingBalance = 100;
// const operations = [1000, -700, 300, -500, 10000];

// function getBalance(arrayOfOperations, initialBalance) {
//   let balance = initialBalance;
//   for (const elem of arrayOfOperations) {
//     balance += elem;
//   }
//   return balance;
// }
// console.log(getBalance(operations, openingBalance));

// function balanceCheck(arrayOfOperations, initialBalance) {
//   let balance = initialBalance;
//   let isOk = true;
//   for (const elem of arrayOfOperations) {
//     balance += elem;
//     if (balance < 0) {
//       isOk = false;
//       break;
//     }
//   }
//   return isOk;
// }
// console.log(balanceCheck(operations, openingBalance));

// function avarageOperations(arrayOfOperations) {
//   let positiveCount = 0;
//   let positiveSumm = 0;
//   let negativeCount = 0;
//   let negativeSumm = 0;

//   for (const elem of arrayOfOperations) {
//     if (elem > 0) {
//       positiveCount++;
//       positiveSumm += elem;
//     }
//     if (elem < 0) {
//       negativeCount++;
//       negativeSumm += elem;
//     }
//   }
//   return [positiveSumm / positiveCount, negativeSumm / negativeCount];
// }
// console.log(avarageOperations(operations));

//? Функции высшего порядка
// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function calculate(a, b, fn) {
//   let res = fn(a, b);
//   return res;
// }
// console.log(calculate(8, 2, add));
// console.log(calculate(8, 2, sub));

// function power(pow) {
//   return function (num) {
//     return num ** pow;
//   };
// }
// const powerOfNum = power(3);
// console.log(powerOfNum(5));
// console.log(power(2)(5));
// const powerOfTwo = power(2);
// console.log(powerOfTwo(10));

// const power = (pow) => (num) => num ** pow;
// const powerOfFour = power(4);
// console.log(powerOfFour(2));
