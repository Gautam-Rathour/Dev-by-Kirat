const fs = require("fs");

function setTimeoutPromisified(duration) {
    return new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });
}

function readFileAsync() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data);
        })
    })
}

// // syntactic sugar
async function solve() {
    await readFileAsync(1000);
}
solve();
console.log("after solve function");

// // callback hell  : ---
// setTimeoutPromisified(1000).then(function() {
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function() {
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function() {
//             console.log("hi there");
//         });
//     });
// });

// console.log("outside the callback hell");


// // Promise chaining   : ---
// setTimeoutPromisified(1000).then(function() {
//     console.log("hi");
//     return setTimeoutPromisified(3000)
// }).then(function() {
//     console.log("hello");
//     return setTimeoutPromisified(5000)
// }).then(function() {
//     console.log("hi there");
// });
// console.log("outside the promise chain");


// //syntactic sugar : ---
// async function solve() {
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000);
//     console.log("hi there");
// }
// solve(); // this is the syntactic sugar of promise chaining

// console.log("After solve function");

// =======================================================================================
// =======================================================================================

// // callback hell  : ---
// setTimeout(function() {
//     console.log("hi");
//         setTimeout(function() {
//             console.log("hello");
//                 setTimeout(function () {
//                     console.log("hello there");
//                 }, 5000)
//         }, 3000)
// }, 1000)

// console.log("outside the callback hell");





































