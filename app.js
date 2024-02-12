// let a = 1;
// console.log(a);
// a = "test";
// console.log(a);

// часовая ставка
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;
console.log(`Смогу лия работать? ${availableHours > projectHours}`);
console.log(`Стоимость работы: ${projectHours * payRateUSD}$`);
