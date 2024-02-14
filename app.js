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
