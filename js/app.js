for (let i = 0; i < 5; i++) {
    console.group(`i = ${i}`);

    for (let j = 0; j < 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
        break;
    }

    console.groupEnd();
}

// index, idx
const users = ['mango', 'kiwi', 'ajax', 'poly'];
console.table(users);
users.splice(3);
console.table(users);

// Деструктивные методы
const users = ['mango', 'kiwi', 'ajax', 'poly'];
console.table(users);
users.push('tomato');
console.table(users);
const usersCopy = users.slice(3);
console.table(usersCopy);
console.table(users);
users.splice(2);
console.table(users);

// Уникальные значения массивов
function findUnique(firstArray, secondArray) {
    const unqueElements = [];

    for (const el of firstArray) {
        const isInSecondArray = secondArray.includes(el);
        if (!isInSecondArray) {
            unqueElements.push(el);
        }
    }

    for (const el of secondArray) {
        const isInFirstArray = firstArray.includes(el);
        if (!isInFirstArray) {
            unqueElements.push(el);
        }
    }

    return unqueElements;
}

const start = performance.now();
console.log(findUnique(['a', 'b', 5, 'd', 'f'], ['a', 'c', 4, 'd', 'e', 'b']));
const end = performance.now();
console.log(end - start);

// Уникальные значения массивов по современному (не для новичков)
const firstArray = ['a', 'b', 5, 'd', 'f'];
const secondArray = ['a', 'c', 4, 'd', 'e', 'b'];
console.log([
    ...firstArray.filter(el => !secondArray.includes(el)),
    ...secondArray.filter(el => !firstArray.includes(el)),
]);

// Самое длинное слово
function findLongestWord(string) {
    // Пиши код ниже этой строки
    let longestWord = '';
    const words = string.split(' ');
    console.log(words);

    for (const el of words) {
        console.log('el: ', el);
        console.log('longestWord: ', longestWord);
        if (el.length > longestWord.length) {
            longestWord = el;
        }
    }

    return longestWord;
    // Пиши код выше этой строки
}

console.log(findLongestWord('a aa aaa  aaaa'));
