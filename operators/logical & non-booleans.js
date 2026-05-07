// Logical AND (&&)
// Return TRUE if both operands are TRUE

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// Logical OR (||)
// Return TRUE if one of the operands is TRUE

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

// NOT (!)

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

Falsy (false)
undefined
null
0
false
''
NaN

// Anything that is not Falsy -> Truthy
short-circuiting

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);