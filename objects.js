// Basics

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw(); // Method

// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw () {
//             console.log('draw');
//         }
//     };
// }
// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// const myCircle = createCircle(1);

// Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }

// }

// const circle = new Circle(1);

// Dyanamic Nature of objects
// const circle = {
//     radius: 1
// };
// circle.color = 'yellow';
// circle.draw = function() {}
// delete circle.color;
// delete circle.draw;

// console.log(circle);

// Constructor property

// let x = {};
// let x = new Object();
// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

// function are objects

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);

// Value vs Reference types

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// let obj = { value: 10 };
// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// Enumerating properties of an object

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle)
//     console.log(key, circle[key]);

// for (let key of Object.keys(circle))
//     console.log(key);

// for (let entry of Object.entries(circle))
//     console.log(entry);

// if ('radius' in circle) console.log('yes');

// cloning an object

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// const another = Object.assign({}, circle);

// const another = { ...circle };

// console.log(another);

// garbage collection

// let circle = { };
// console.log(circle);

// String object
// const another = new String('hi')

// Object {}
// Boolean true, false
// String '', ""
// Template ``

// Template Literals

// const message = 'Hi ' + name + ',\n'

// const another =
// `Hi John,

// Thank you for joining my mailing list.

// Regards,
// Krinshsmith`;

// console.log(another);

// const name = 'Krinshsmith'
// const another =
// `Hi ${name} ${ 2 + 3 },

// Thank you for joining my mailing list.

// Regards,
// Kava`;

// console.log(another);


// Date

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);