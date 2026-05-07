// // Funtions Declarations
// function walk() {
//     console.log('walk');
// }

// // Anonymous Function Expressions
// const run = function() {
//     console.log('run');
// };
// let move = run;
// run();
// move();

// Hoisting

// Funtions Declarations
// walk();

// function walk() {
//     console.log('walk');
// }

// Function Expressions
// run();

// const run = function() {
//     console.log('run');
// };
// let move = run;

// Arguments

// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10));

// The Rest Operator

// function sum(...args) {
//     let total = 0;

//     return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 10));

// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));

// Default Parameters

// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000));

// Getters and Setters

// const person = {
//     firstName: 'Krinshsmith',
//     lastName: 'Kava',
//     get fullName () {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// person.fullName = 'Shrey Vadariya';

// getters => access properties
// setters => change (mutate) them
// console.log(person);

// Try and Catch

// const person = {
//     firstName: 'Krinshsmith',
//     lastName: 'Kava',
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('Value is not a string.');

//         const parts = value.split(' ');
//         if (parts.length !==2)
//             throw new Error('Enter a first and last name.');

//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try {
//     person.fullName = '';
// }
// catch (e) {
//     alert(e);
// }

// console.log(person);

// Local vs Global Scope

// function start() {
//     const message = 'hi';

//     if (true) {
//         const another = 'bye';
//     }

//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// start();

// const color = 'red';

// function start() {
//     const message = 'hi';
//     const color = 'blue';
//     console.log(color);
// }

// function stop() {
//     const message = 'bye';
// }
// start();

// Let vs Var

// var color = 'red';
// let age = 30;

// function sayHi() {
//     console.log('hi');
// }

// The "This" Keyword

