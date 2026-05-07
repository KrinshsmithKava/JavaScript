// Hoisting

// Funtions Declarations
walk();

function walk() {
    console.log('walk');
}

// Function Expressions
run();

const run = function() {
    console.log('run');
};
let move = run;