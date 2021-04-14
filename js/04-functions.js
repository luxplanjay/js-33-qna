'use strict';
// Повторение
// console.log(`20 дней это ${20 * 24 * 60} минут`);
// console.log(`10 дней это ${10 * 24 * 60} минут`);
// console.log(`5 дней это ${5 * 24 * 60} минут`);

function daysToMinutes(days) {
    if (days >= 0) {
        return `${days} дней это ${days * 24 * 60} минут`;
    } else {
        return 'Количество дней должен быть больше либо равно нулю';
    }
}

console.log(daysToMinutes(5));
console.log(daysToMinutes(10));
console.log(daysToMinutes(15));
console.log(daysToMinutes(-1));
