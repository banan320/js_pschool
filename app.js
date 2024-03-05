"use strict";
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

//? Итерация в массиве
// const score = [5, 10, 0, 15];
// for (const [i, el] of score.entries()) {
//   console.log(`Раунд ${i + 1}: очков ${el}`);
// }

// score.forEach((el, i) => console.log(`Раунд ${i + 1}: очков ${el}`));

// const transavtionInUSD = [10, -7, 50, -10, 100];
// const transactionInRUB = [];
// for (const transaction of transavtionInUSD) {
//   transactionInRUB.push(transaction * 90);
// }
// console.log(transactionInRUB);

// const transactionInRUB2 = transavtionInUSD.map((transaction) => {
//   return transaction * 90;
// });
// console.log(transactionInRUB2);

// const operations = [10, -7, 50, -10, 100];
// const positiveOperations = operations.filter((operation) => {
//   return operation > 0;
// });
// console.log(positiveOperations);

// const positiveRUBoperations = operations
//   .filter((operation) => {
//     return operation > 0;
//   })
//   .map((operation) => operation * 90);
// console.log(positiveRUBoperations);

// const prices = [
//   [100, 200],
//   [120, 100],
//   [200, 350],
// ];
// const result = prices
//   .map((product) => product[1] - product[0])
//   .filter((price) => price > 0);
// console.log(result);

// const operations = [10, -7, 50, -10, 100];
// const finalBalance = operations.reduce((acc, operation, i) => {
//   console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`);
//   return (acc += operation);
// }, 0);
// console.log(finalBalance);

// const minElement = operations.reduce((acc, operation) => {
//   if (operation > acc) {
//     return acc;
//   } else {
//     return operation;
//   }
// }, 0);
// console.log(minElement);

// const arr = [2, 4, 4, 10];
// const result = arr.reduce((acc, operation, i) => {
//   if (i != arr.length - 1) {
//     return acc + operation;
//   }
//   return (acc + operation) / arr.length;
// }, 0);
// console.log(result);

// const arr = [2, 4, 4, 10];
// let elGT5;
// for (const el of arr) {
//   if (el > 5) {
//     elGT5 = el;
//     break;
//   }
// }
// elGT5 = arr.find((el) => el > 5);
// let elGT5Index = arr.findIndex((el) => el < 0);
// console.log(elGT5);
// console.log(elGT5Index);

// const arr = [2, 4, 4, 10, 20];
// function some(el, arr) {
//   let res = arr.find((elem) => elem === el);
//   return res == undefined ? false : true;
// }
// console.log(some(5, arr));
// console.log(arr.some((el) => el === 2));

// const prices = [
//   [2, 4],
//   [3, 4],
//   [10, [20, 50]],
// ];
// const res = prices.flat(2);
// // console.log(res);
// const res2 = prices.flatMap((el) => el.concat([1]));
// console.log(res2);

// const users = ["Вася", "Маша", "Катя", "Аня"];
// console.log(users);
// users.sort();
// console.log(users);

// const operations = [100, -300, -100, 50, 480];
// // operations.sort((a, b) => a - b);
// // console.log(operations);
// operations.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   }
//   if (a > b) {
//     return -1;
//   }
// });
// console.log(operations);

// const arr = Array.from({ length: 5 }, (cur, i) => i + 1);
// console.log(arr);

// let arr = [1, 2, 3];
// let res = arr
//   .map((e) => [e * 2])
//   .flat()
//   .reduce((acc, el) => (acc -= el), 0);
// console.log(res);

// const usrname = "Вася ыываыв ываыва ываыва Пупкин";
// const name = usrname.slice(0, usrname.indexOf(" "));
// const surname = usrname.slice(usrname.lastIndexOf(" ") + 1, usrname.length);
// console.log(name + " " + surname);

// const num1 = "89103235356";
// const num2 = "+79103235356";
// const num3 = "+7(910)3235356";
// const num4 = "+7(910) 323-53-56";
// const num5 = " +7(910) 323-53-56 ";
// // не верные номера
// const num1Error = "89103235";
// const num2Error = "+7d910d323-53-56";
// const num3Error = "9+7103235356";
// const num4Error = "89103q35356";
// function isNumber(num) {
//   num = num.trim();
//   num = num.replace("+7", "8");
//   if (!num.startsWith("8")) {
//     return false;
//   }
//   num = num.replaceAll("(", "");
//   num = num.replaceAll(")", "");
//   num = num.replaceAll(" ", "");
//   num = num.replaceAll("-", "");
//   if (num.length != 11) {
//     return false;
//   }
//   let onlyNum = true;
//   for (const char of num) {
//     if (isNaN(char)) {
//       onlyNum = false;
//       break;
//     }
//   }
//   return onlyNum;
// }
// console.log(isNumber(num1));
// console.log(isNumber(num2));
// console.log(isNumber(num3));
// console.log(isNumber(num4));
// console.log(isNumber(num5));
// console.log("ddddddddddddddddddddddddddddd");
// console.log(isNumber(num1Error));
// console.log(isNumber(num2Error));
// console.log(isNumber(num3Error));
// console.log(isNumber(num4Error));

// const card = "4564165651561456";
// console.log(card.slice(-4).padStart(16, "*"));

//? Объекты
// const users = [
//   { name: "Вася", age: 30 },
//   { name: "Катя", age: 18 },
//   { name: "Аня", age: 20 },
//   { name: "Петя", age: 25 },
// ];
// const sortUsers = users.sort((a, b) => a.age - b.age);
// console.log(sortUsers);

// function sortArray(age) {
//   return (a, b) => (a[age] > b[age] ? 1 : -1);
// }
// console.log(users.sort(sortArray("age")));

//! Упражнение - преобразование объектов
// const users = [
//   {
//     name: "Вася",
//     surname: "Пупкин",
//     age: 30,
//     skills: ["Разработка", "DevOps"],
//   },
//   { name: "Катя", surname: "Белова", age: 18, skills: ["Дизайн"] },
// ];
// const fullNameUsers = users.map((user) => {
//   // let fullName = `${user.name} ${user.surname}`;
//   // // let fullName = user["name"] + " " + user["surname"];
//   // let skillNum = user.skills.length;
//   // return { fullName, skillNum };
//   return {
//     fullName: `${user.name} ${user.surname}`,
//     skillNum: user.skills.length,
//   };
// });
// console.log(fullNameUsers);

//! Упражнение - кошелёк
// const wallet = {
//   balance: 0,
//   operations: [],
//   balanceIncrease: function (reason, sum) {
//     this.balance += sum;
//     this.operations.push({  reason,  sum });
//     return true;
//   },
//   balanceReduction: function (reason, sum) {
//     if (this.balance < sum) {
//       console.log("Недостаточно средств!");
//       return false;
//     }
//     this.balance -= sum;
//     this.operations.push({ reason, sum: -sum });
//     return true;
//   },
//   numberOperations: function () {
//     return `Количество операций: ${this.operations.length}`;
//   },
// };
// console.log(wallet.balanceIncrease("Зарплата", 60000));
// console.log(wallet.numberOperations());
// console.log(wallet.balanceIncrease("Шабашка", 15000));
// console.log(wallet.numberOperations());
// console.log(wallet.balanceReduction("Налог", 130000));
// console.log(wallet.numberOperations());
// console.log(wallet.balanceReduction("Покупка хлеба", 13000));
// console.log(wallet.numberOperations());
// console.log(wallet.balance);
// console.log(wallet.operations);
// // console.log(wallet);

// const balance = 7;
// const wallet = {
//   balance,
//   operations: [],
// };

// let cities = {
//   msk: {
//     let: 200,
//     temp: 25,
//   },
//   spb: {
//     lt: 100,
//     temp: 20,
//   },
// };
// let sumTemp = 0;
// // let citiesCount = 0;
// // for (const key in cities) {
// //   citiesCount++;
// //   sumTemp += cities[key].temp;
// // }
// let citiesCount = Object.keys(cities).length;
// // for (const key in cities) {
// //   sumTemp += cities[key].temp;
// // }
// // console.log(sumTemp / citiesCount);
// for (const key of Object.keys(cities)) {
//   sumTemp += cities[key].temp;
// }
// console.log(sumTemp / citiesCount);

// let user = {
//   name: "Vasya",
//   age: 40,
//   city: "Moskow",
// };
// const { age, ...userWithouAge } = user;
// // console.log(age);
// // console.log(userWithouAge);
// const additionalData = {
//   skills: ["Разработка", "Дизайн"],
//   creditCard: "2323-23232-2322323",
// };
// // user.skills = additionalData.skills;
// // console.log(user);
// user = {
//   ...user,
//   ...additionalData,
// };
// console.log(user);

// const cities = {
//   msk: {
//     temp: {
//       celcius: 25,
//     },
//   },
//   spb: {
//     temp: {},
//   },
// };
// const city = "msk";
// if (cities[city] && cities[city].temp) {
//   console.log(cities[city].temp.celcius);
// }
// console.log(cities.spb?.temp?.celcius);

//! Упражнение - склад
// const warehouse = {
//   goods: [],
//   findGoodById: function (id) {
//     return this.goods.find((g) => g.id == id);
//   },
//   addGood: function (good) {
//     const existedGood = this.findGoodById(good.id);
//     if (existedGood) {
//       console.log("Товар уже есть на складе");
//       return;
//     }
//     this.goods.push(good);
//   },
//   getWeightKg: function () {
//     return this.goods.reduce(
//       (acc, el) => (acc += el.weight?.kg ? el.weight.kg : 0),
//       0
//     );
//   },
// };

// /* Товары */
// const car = {
//   id: 1,
//   weight: {
//     kg: 1000,
//   },
//   brand: "Ford",
// };

// const chair = {
//   id: 2,
//   weight: {
//     kg: 20,
//   },
// };

// const paper = {
//   id: 3,
//   color: "red",
// };
// warehouse.addGood(car);
// warehouse.addGood(chair);
// warehouse.addGood(car);
// warehouse.addGood(paper);
// console.log(warehouse.goods);
// console.log(warehouse.findGoodById(1));
// console.log(warehouse.getWeightKg());

//? Пример использования this
// function addNum(n1, n2) {
//   console.log(this);
//   return n1 + n2;
// }
// addNum();
// const addNum2 = (n1, n2) => {
//   console.log(this);
//   return n1 + n2;
// };
// // addNum2();
// const user = {
//   name: "Вася",
//   surname: "Пупкин",
//   getFullName: function () {
//     console.log(this);
//     return this.name + " " + this.surname;
//   },
// };
// // user.getFullName();
// const user2 = {
//   name: "Марина",
//   surname: "Катц",
// };
// user2.getFullName = user.getFullName;
// user2.getFullName();
// const getFullName = user2.getFullName;
// getFullName();

//! Объект в объекте
// const company = {
//   name: "ООО Агро",
//   employees: [
//     {
//       name: "Света",
//       getName: function () {
//         return console.log(this.name);
//       },
//     },
//   ],
//   ceo: {
//     name: "Вася",
//     getName: function () {
//       return console.log(this.name);
//     },
//   },
//   getName: function () {
//     return console.log(this.name);
//   },
// };
// company.getName();
// company.ceo.getName();
// company.employees.map((employee) => employee.getName());

//? Управление this
