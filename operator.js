// Arithmetic Operator

// let x = 10;
// let y = 3;

// console.log(x + y); // Addition
// console.log(x - y); // Subtraction
// console.log(x * y); // Multiplication
// console.log(x / y); // Division
// console.log(x % y); // Module
// console.log(x ** y); // x Power of y

// console.log(x++); // Increment (++)
// console.log(x);

// console.log(x--); // Decrement (--)
// console.log(x);

// Assignment Operator

// let x = 10;

// x = x + 5;
// x += 5; // Assignment

// x = x * 3;
// x *= 3; // Assignment

// console.log(x);

// Comparison Operator

// let x = 1;

// console.log(x > 0); // Greaterthan
// console.log(x >= 1); // Greaterthan equal to
// console.log(x < 0);  // Lessthan
// console.log(x <= 1); // Lessthan equal to

// // Equality Operator
// console.log(x === 1);
// console.log(x !== 1);

// Strict Equality (Type + Value)
// console.log(1 === 1);
// console.log('1' === 1);

// Lose Equality
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);

// Ternary Operator

// If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a 'silver' customer.

// let points = 90;
// let type = points > 100 ? 'gold': 'silver';
// console.log(type);

// Logical Operator

// Logical AND (&&)
// Return TRUE if both operands are TRUE

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

// Logical OR (||)
// Return TRUE if one of the operands is TRUE

// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan);

// NOT (!)

// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy
// short-circuiting

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// Bitwise Operator

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 0 = 00000000

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// 00000100
// 00000110
// 00000001

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);

// let message = (myPermission & readPermission) ? 'yes': 'no';
// console.log(message);

// Operator Precedence

// let x = 2 + 3 * 4;
// let x = (2 + 3) * 4;
// console.log(x);

// Exercise

// let a = 'red';
// let b = 'blue';
// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);