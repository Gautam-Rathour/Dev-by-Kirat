 // Map, filter , arrow fns  : --


// function sum (a, b) {
//     return a + b;
// }

// Arrow function : ---
// const sum = (a, b) => {
//     return a + b;
// }


// app.get("/", (req, res) => {
//     res.send({
//         ans : a + b
//     })
// })

// app.get("/", function(req, res) {

// })

// const ans = sum(1, 2);
// console.log(ans);

// =============================================================================
// =============================================================================

// Map : ---

// const input = [1, 2, 3, 4, 5];

// // const newArray = [];
// // for(let i=0; i<input.length; i++) {
// //     newArray.push(input[i] * 2);
// // }
// // console.log(newArray);


// // //other solution : --
// function transform(i) {
//     return i * 2;
// }

// const ans = input.map(transform);
// console.log(ans);

// =============================================================================
// =============================================================================

// filtering 
// what if I tell u, given an input array, give me back all the even values from it.

// const arr = [1, 2, 3, 4, 5];
// //[2, 4]

// const newArray = [];

// for(let i=0; i<arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         newArray.push(arr[i]);
//     }
// }
// console.log(newArray);

// =============================================================================

// const arr = [1, 2, 3, 4, 5];
// function even(i) {
//     if(i % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }


// const ans = arr.filter(even);
// console.log(ans);

// =============================================================================
// =============================================================================

// map : --
// create a map fn that takes an array and a fransofrm fn as input and returns the transofrmed array as output.

const arr = [2, 3, 4, 5, 6];

function transofrm (n) {
    return n * n * n;
}

const ans = arr.map(transofrm);
console.log(ans);









































