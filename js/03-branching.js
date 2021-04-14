// https://user-images.githubusercontent.com/17479434/114567620-165cf280-9c7c-11eb-84a3-5408c6c6351f.png

// Осталось дней до дедлайна
// если до дедлайна 0 дней выводим Сегодня
// если до дедлайна 1 день выводим Завтра
// если до дедлайна 2 дня  выводим Послезавтра
// если до дедлайна 3+ дней выводим Дату

const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
    console.log('Сегодня');
} else if (daysUntilDeadline === 1) {
    console.log('Завтра');
} else if (daysUntilDeadline === 2) {
    console.log('Послезавтра');
} else {
    console.log('Какая-то дата');
}

switch (daysUntilDeadline) {
    case 0:
        console.log('Сегодня');
        break;
    case 1:
        console.log('Завтра');
        break;
    case 2:
        console.log('Послезавтра');
        break;
    default:
        console.log('Какая-то дата');
}

// Цвет в зависимости от времени
// Сколько в этих минутах целых часов
// Выбрать цвет текста
const timeInMinutes = 1270;
const hours = Math.floor(timeInMinutes / 60);
const minutes = timeInMinutes % 60;
console.log(`${hours} ч ${minutes} мин`);

// let timestring;
// if (minutes > 0) {
//     timestring = `${hours} ч ${minutes} мин`;
// } else {
//     timestring = `${hours} ч`;
// }
// console.log(timestring);

if (hours < 17) {
    console.log('Black');
} else if (hours >= 17 && hours < 24) {
    console.log('Orange');
} else {
    console.log('Red');
}
