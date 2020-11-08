//Values and Variables
// are values
/*
let js = "amazing"
console.log(40 + 8 + 23 - 10);
console.log("Pavel")
console.log(23);

//are variables

let firstName = "Pavel";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let pavel_maryna = "PM";
let $function = 30;

let person = "pavel";
let PI = 3.1415;

let myFirstJob = 'Web developer';
let myCurrentJob = 'Courier';

let job1 = 'programmer';
let job2 = 'courier';

console.log(myFirstJob);
*/

//Data Types
//Primitive data types - 7
// 1. number let age = 30;
// 2. string let firstName = 'Pavel';
// 3.Boolean let fullage = true;
// 4.Undefined let children;
// 5. Null 'empty value';
// 6. Symbol
// 7.Biglnt 

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 30);
//console.log(typeof 'Pavel');

//dinamic typing
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1989;
console.log(typeof year);
console.log(typeof null);
*/

//Basic Opetators
/*
const agePavel = 2037 - 1989;
const ageMaryna = 2037 - 2011;
console.log(agePavel, ageMaryna);
console.log(agePavel * 2, ageMaryna / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Pavel';
const lastName = 'Tyshchenko';
console.log(firstName + ' ' + lastName); //found mistake !
// ' ' - space

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--; // x = x - 2
console.log(x);

//comparison operators
console.log(agePavel > ageMaryna);
console.log(ageMaryna >= 18);

const isFullage = ageMaryna >= 18;

console.log(now - 1991 > now - 2020)
*/

//Operator Precedence
/*
const now = 2051;
const agePavel = now - 1989;
const ageMaryna = now - 2018;

console.log(now - 1989 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);
const averageAge = (agePavel + ageMaryna) / 2
console.log(agePavel, ageMaryna);
*/

//Coding challenge

//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
//Your tasks:
//1. Store Mark's and John's mass and height in variables
//2. Calculate both their BMIs using the formula (you can even implement both
//versions)
//3. Create a Boolean variable 'markHigherBMI' containing information about
//whether Mark has a higher BMI than John.
//Test data:
//§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
//m tall.
//§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
//m tall.


const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark > BMIJohn);


