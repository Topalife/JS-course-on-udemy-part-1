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
/*
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
console.log(BMIMark, BMIJohn, markHigherBMI);
*/

//Strings
/*
const firstName = 'Pavel';
const job = 'courier';
const birthYear = 1991;
const year = 2037;
const pavel = "I'm" + firstName + ', a' + (year - birthYear) + 'years old' + job + '!';
console.log(pavel);

//Template strings
const pavelNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(pavelNew);

const greeting = "Hello, ";
const myName = "Pavel!";
console.log(greeting + myName);

*/

//else statements
/*
const age = 18;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Maryna can start driving license 🚗');
}
*/

/*
const age = 15;
const isOldEnough = age >= 18;
if (age >= 18) {
    console.log('Maryna can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Maryna is too young.Wait another ${yearsLeft} years`);
}
*/

/*
const birthYear = 1998;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//Challenge #2

//Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
//Your tasks:
//1. Print a nice output to the console, saying who has the higher BMI. The message 
//is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
//BMI (28.3) is higher than John's (23.9)!"
//Hint: Use an if/else statement

//#1
//const massMark = 95;
//const heightMark = 1.69;
//const massJohn = 85;
//const heightJohn = 1.88;

//const BMIMark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);
//const markHigherBMI = BMIMark > BMIJohn;

//if (BMIMark > BMIJohn) {
//    console.log("Mark's BMI is higher then John's!");
//} else {
//    console.log("John's BMI is higher then Mark's!");
//}


/*#2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.88;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;


if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher then John's! (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn})is higher then Mark's!(${BMIMark})`);
}
*/
