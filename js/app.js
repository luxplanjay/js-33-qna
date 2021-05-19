const vehicles = [
    { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
    { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
    { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
    { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
    { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
    { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
    { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

// console.table(
//     vehicles
//         .filter(({ make, price }) => make === 'Toyota' && price > 30000)
//         .sort((a, b) => b.price - a.price),
// );

/*
 * Метод sort
 */
const sortByAscendingAmount = cars => [...cars].sort((a, b) => a.amount - b.amount);
// console.table(sortByAscendingAmount(vehicles));

const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);
// console.table(sortByDescendingPrice(vehicles));

/*
 * Метод map
 */
const getModels = cars => cars.map(({ model, type }) => ({ model, type }));
// console.table(getModels(vehicles));

/*
 * Метод filter
 */
const filterByPrice = (cars, priceThreshold) => cars.filter(car => car.price > priceThreshold);
// console.table(filterByPrice(vehicles, 30000));

const getCarsWithDiscount = cars => cars.filter(car => car.onSale);
// console.table(getCarsWithDiscount(vehicles));

const getCarsWithoutDiscount = cars => cars.filter(car => !car.onSale);
// console.table(getCarsWithoutDiscount(vehicles));

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);
// console.table(getCarsWithType(vehicles, 'suv'));

/*
 * А если нужно отфильтровать и те что на sale и те что дешевле 23к?
 */
const filterCars = (cars, priceThreshold) => {
    return cars.filter(car => car.price < priceThreshold && car.onSale);
};
// console.table(filterCars(vehicles, 40000));

/*
 * Метод find
 */
const getCarByModel = (cars, model) => cars.find(car => car.model === model);
// console.log(getCarByModel(vehicles, 'F-150'));

/*
 * Метод reduce
 */
const getTotalCarsAmount = cars => {
    return cars.reduce((totalAmount, car) => totalAmount + car.amount, 0);
};
// console.log(getTotalCarsAmount(vehicles));

/*
 * Цепочки методов
 */

// filterByAmount + только название модели получить (filter + map)
const getAvailableCarNames = (cars, amountThreshold) => {
    return cars.filter(car => car.amount > amountThreshold).map(car => car.model);
};
// console.table(getAvailableCarNames(vehicles, 12));

// filterByAmount + только название модели получить (reduce)
// const getAvailableCarNames = (cars, amountThreshold) => {
//     return cars.reduce((models, car) => {
//         if (car.amount > amountThreshold) {
//             models.push(car.model);
//         }

//         return models;
//     }, []);
// };
// console.table(getAvailableCarNames(vehicles, 12));

// filter + sort (получить машины на распродаже и сортировать по цене)
const getSortedCarsOnSale = cars => {
    return cars.filter(car => car.onSale).sort((a, b) => b.price - a.price);
};
// console.table(getSortedCarsOnSale(vehicles));
