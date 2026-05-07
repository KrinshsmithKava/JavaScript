// Adding Elements

// const numbers = [3, 4];

// // End
// numbers.push(5, 6);

// // Beginning
// numbers.unshift(1, 2);

// // Middle
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);

// Finding Elements (primitive)

// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));

// Finding Elements (reference types)

// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
// ];

// const course = courses.find(function(course) {
//     return course.name === 'a';
// });

// const course = courses.findIndex(function(course) {
//     return course.name === 'a';
// });
// console.log(course);

// Arrow Functions

// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'},
// ];

// const course = courses.find(course => course.name === 'a');

// console.log(course);

// Removing Elements

// const numbers = [1, 2, 3, 4];

// End
// const last = numbers.pop()
// console.log(numbers);
// console.log(last);

// Beginning
// const first = numbers.shift()
// console.log(numbers);
// console.log(first);


// Middle
// numbers.splice(2, 2)
// console.log(numbers);


// const middle = numbers.splice(2, 2)
// console.log(numbers);
// console.log(middle);

// Emptying an Array

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// Solution 1
// numbers = [];

// Solution 2
// numbers.length = 0;

// Solution 3
// numbers.splice(0 , numbers.length)

// Solution 4
// while (numbers.length > 0)
//     numbers.pop();

// console.log(numbers);
// console.log(another);

// Combining and Slicing Aarrays

// const first = [1, 2, 3];
// const first = [{ id: 1 }];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id =10;

// // const slice = combined.slice(2, 4);
// // const slice = combined.slice(2);
// const slice = combined.slice();

// console.log(combined);
// console.log(slice);

// The Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b'];

// const copy = combined.slice();
// const copy = [...combined];

// console.log(combined);
// console.log(copy);

// Iterating an Array

// const numbers = [1, 2, 3];

// for (let number of numbers)
//     console.log(number);

// numbers.forEach((number, index) => console.log(index, number));

// Joining Arrays

// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);
// const combined = parts.join('-');
// console.log(combined);

// Sorting Arrays

// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'javaScript' },
// ];

// courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();

//     if(nameA < nameB) return -1;
//     if(nameA > nameB) return 1;
//     return 0;
// });
// console.log(courses);

// Testing the Elements of an Array

// const numbers = [1, -1, 2, 3];

// every()
// some()

// const atLeastOnePositive = numbers.some(function(value) {
//     return value >= 0;
// });

// console.log(atLeastOnePositive);

// Filtering an Array

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// console.log(filtered);

// Mapping an Array

// const numbers = [1, -1, 2, 3];

// const items = numbers
//     .filter(n => n >= 0)
//     .map(n => ({ value: n }))
//     .filter(obj => obj.value > 1)
//     .map(obj => obj.value);

// console.log(items);

// Reducing an Array

const numbers = [1, -1, 2, 3];

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a =2, c = 3 => a =5
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// let sum = 0;
// for (let n of numbers)
//     sum += n;

console.log(sum);

