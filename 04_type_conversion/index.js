//Задание №1

//string
let lastName = "Wayne";
console.log(Number(lastName), Boolean(lastName), String(lastName));


//number
let cash = 150;
console.log(Number(cash), Boolean(cash), String(cash));

//bollean
let isItHero = true;
console.log(Number(isItHero), Boolean(isItHero), String(isItHero));

//undefined
let monthlyProfit = undefined;
console.log(Number(monthlyProfit), Boolean(monthlyProfit), String(monthlyProfit));

//null
let englishLevel= null;
console.log(Number(englishLevel), Boolean(englishLevel), String(englishLevel));

//object
const car = {
    brand: 'Ferrari',
    model: 'F40',
    speed: 300
};
console.log(Number(car), Boolean(car), String(car));

//symbol
let id = Symbol('smbl');
console.log(Boolean(id), String(id)); //Number(id) - выдает ошибку, убрал 


//bigint
let largeNumber = 10n;
console.log(Number(largeNumber), Boolean(largeNumber), String(largeNumber));



