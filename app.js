// let a = 1;
// console.log(a);
// a = "test";
// console.log(a);

// часовая ставка
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

// Размещения депозита
const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** 24;
if (res > houseCost) {
  console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}`);
} else {
  console.log(`Мы накопили: ${res}. Купить не сможем (((`);
}
