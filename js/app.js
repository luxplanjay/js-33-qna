// ===============================
function getTabLabel(tabName) {
    const labels = {
        theory: 'Теория',
        extras: 'Материалы',
        homework: 'Домашнее задание',
    };

    return labels[tabName];
}

console.log(getTabLabel('homework'));
console.log(getTabLabel('extras'));
console.log(getTabLabel('theory'));

// ===============================
function calcTotal(country, tax, value) {
    console.log(`${country} ${value * (1 + tax)}`);
}

calcTotal('UA', 0.2, 100);
calcTotal('UA', 0.2, 200);
calcTotal('UA', 0.2, 400);
calcTotal('UA', 0.2, 100);
calcTotal('UA', 0.2, 200);
calcTotal('UA', 0.4, 100);
calcTotal('UA', 0.4, 200);

function makeCalcTotal(country) {
    return function (tax) {
        return function (value) {
            console.log(`${country} ${value * (1 + tax)}`);
        };
    };
}

const calcUA = makeCalcTotal('UA');
const calcEN = makeCalcTotal('EN');

const calcUA02 = calcUA(0.2);
const calcUA04 = calcUA(0.4);
calcUA02(100);
calcUA02(200);
calcUA04(100);
calcUA04(200);

const calcEN03 = calcEN(0.3);
const calcEN05 = calcEN(0.5);
calcEN03(100);
calcEN03(200);
calcEN03(100);
calcEN03(200);

// ===============================
const btn = document.querySelector('button');

console.dir(btn);

function onBtnClick() {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + Date.now());
    btn.textContent = 'AAAAAAAAAAAAAAAAAAAAAAAAAAA' + Date.now();
}

btn.addEventListener('click', onBtnClick);
