// Funtions Declarations
function walk() {
    console.log('walk');
}

// Anonymous Function Expressions
const run = function() {
    console.log('run');
};
let move = run;
run();
move();
