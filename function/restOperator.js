// The Rest Operator

// function sum(...args) {
//     let total =0;
//     return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 10));


function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));