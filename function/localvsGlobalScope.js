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

const color = 'red';

function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}

function stop() {
    const message = 'bye';
}
start();