import { differenceInYears } from 'date-fns';
import 'modern-normalize/modern-normalize.css';
import './sass/modules/main/index.scss';

const MS_PER_YEAR = 31_556_952_000;

const month = 5;
const day = 2;
const year = 1980;

const birthDay = new Date(year, month - 1, day);
const today = new Date();

console.log(Math.floor((today - birthDay) / MS_PER_YEAR));
console.log(differenceInYears(today, birthDay));
