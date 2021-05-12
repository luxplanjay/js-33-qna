// Это в другом файле или данные с бекенда
const vehicles = [
    { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
    { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
    { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
    { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
    { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
    { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
    { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
];

class CarsManager {
    #vehicles;
    #totalPrice;

    constructor(cars = []) {
        this.#vehicles = cars;
        this.#totalPrice = 0;
    }

    get cars() {
        return this.#vehicles;
    }

    get models() {
        const models = [];
        for (const car of this.#vehicles) {
            models.push(car.model);
        }
        return models;
    }

    changeModel(oldModelName, newModelName) {
        for (const car of this.#vehicles) {
            if (car.model === oldModelName) {
                car.model = newModelName;
            }
        }
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (const car of this.#vehicles) {
            totalPrice += car.price;
        }
        return totalPrice;
    }

    get totalPrice() {
        let totalPrice = 0;
        for (const car of this.#vehicles) {
            totalPrice += car.price;
        }
        this.#totalPrice = totalPrice;
        return this.#totalPrice;
    }

    set totalPrice(x) {
        if (x <= 0) {
            console.log('XXXXXXXXXXXXXXXXXXXXXXX');
            return;
        }
        this.#totalPrice = x;
    }
}

const carsManager = new CarsManager(vehicles);
console.log(carsManager);
// console.log(carsManager.models);

carsManager.totalPrice = -5;
console.log(carsManager.totalPrice);

// carsManager.changeModel('Mazda 6', 'Hello world');
// console.table(carsManager.cars);

// carsManager.changeModel('Fusion', 'AAAAAA');
// console.table(carsManager.cars);

// carsManager.changeModel('F-150', 'BBBBBB');
// console.table(carsManager.cars);

// console.log('total price: ', carsManager.getTotalPrice());
// console.log('total price: ', carsManager.totalPrice);
