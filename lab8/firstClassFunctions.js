// // pure function:
// const add = function(x, y) {
//     return x+y;
// };

// add(2,3);


// // not-pure function:
// const foo = function () {
//     console.log(`I'm foo`);
// };
// foo();

// callback function
// function foo() {
//     console.log(`I'm foo`);
// };

// global.setTimeout( foo(), 2000 );


// // function setTimeout(f, ms) {
// //     wait(ms);
// //     f();
// // }

// // function as return value:
// const bar = function () {
//     return function () {
//         console.log(`I'm foo`);
//     };
// }

// bar()();
// // let baz = bar();
// // baz();
