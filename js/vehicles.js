// Это в другом файле
// const vehicles = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//     { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//     { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//     { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//     { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//     { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// ];

// console.table(vehicles);

/**
 * ПОЛУЧИТЬ СПИСОК МОДЕЛЕЙ
 */
// 1. Перебрать массив
// 2. Получить доступ к каждому обьекту
// 3. На каждой итерации взять у текущего обьекта значение свойства model
// 4. Сделать пустой массив
// 5. На каждой итерации записывать в массив значение свойства model текущего обьекта

// const models = [];
// for (const vehicle of vehicles) {
// console.group(Date.now());
// models.push(vehicle.model);
// console.log(vehicle.model);
// console.log(models);
// console.groupEnd();
// }
// console.log(models);

function getModels(cars) {
    const models = [];

    for (const car of cars) {
        models.push(car.model);
    }

    return models;
}

console.log(getModels(vehicles));

/**
 * ЗАМЕНИТЬ НАЗВАНИЕ МОДЕЛИ
 */

// const oldModelName = 'Mazda 6';
// const newModelName = 'Hello world';

// // 1. Перебираем массив поэлементно

// for (const vehicle of vehicles) {
//     if (vehicle.model === oldModelName) {
//         console.log(vehicle);
//         vehicle.model = newModelName;
//     }
// }

// console.table(vehicles);

function changeModel(cars, oldModelName, newModelName) {
    for (const car of cars) {
        if (car.model === oldModelName) {
            car.model = newModelName;
        }
    }
}

changeModel(vehicles, 'Mazda 6', 'Hello world');
console.table(vehicles);

changeModel(vehicles, 'Fusion', 'AAAAAA');
console.table(vehicles);

changeModel(vehicles, 'F-150', 'BBBBBB');
console.table(vehicles);

/**
 * ПОЛУЧИТЬ ОБЩУЮ ЦЕНУ ВСЕХ МАШИН
 */

function getTotalPrice(cars) {
    let totalPrice = 0;

    for (const car of cars) {
        totalPrice += car.price;
    }

    return totalPrice;
}

console.log('total price: ', getTotalPrice(vehicles));
