//   This is my first JavaScript code!
console.log('Hello World');

let name = 'Krinshsmith';
let surname = 'Kava';
console.log(name);
console.log(surname);

let firstname = 'Krinshsmith', lastname = 'Kava';
console.log(firstname, lastname);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let person = {
    name: 'Krinshsmith',
    age: 30
};

// Dot Notation
person.name = 'Mangal';

// Bracket Notation
let selection = 'name';
person[selection] = 'Shrey';

console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

// Performing a task
function greet(firstname, lastname) {
    console.log('Hello ' + firstname + ' ' + lastname);
}
greet('Krinshsmith', 'Kava');

// Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));