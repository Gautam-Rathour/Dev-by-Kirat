// function sum(a, b) {
//     return a + b;
// }

// let ans = sum(4 , 5);
// console.log(ans);




// function sum(n) {
//     let ans = 0;
//     for(let i=0; i<=n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// let result1 = sum(1000);
// console.log(result1);
// let result2 = sum(10000);
// console.log(result2);
// let result3 = sum(100000);
// console.log(result3);

// ===========================================================================
// ===========================================================================

// const fs = require('fs');

// const data = fs.readFileSync('a.txt', 'utf-8'); // bytes, hex
// console.log(data);
// ===========================================================================


// const fsa = require('fs');

// const data = fsa.readFileSync('a.txt'); // bytes, hex
// console.log(data);

// const data2 = fsa.readFileSync("b.txt");
// console.log(data2);


// const fsa = require('fs');

// function print(err, data) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// }

// fsa.readFile("a.txt", "utf-8", print); // // asynchornously

// fsa.readFile("b.txt", "utf-8", print); // asynchornously
// console.log("Done");

// ===========================================================================
// ===========================================================================


// let ans = 0;
// for (let i = 1; i <= 1000000; i++) {
// 	ans = ans + i
// }
// console.log(ans);	

// ===========================================================================
// ===========================================================================

// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }
  
//   console.log(sum(1, 2))


// ===========================================================================
// ===========================================================================

function timeout() {
    console.log("Click the button!");
}

console.log("Hi");

setTimeout(timeout, 1000);

console.log("Welcome to loupe.");

let c = 0;
for(let i=0; i<10000000000; i++) {
    c += 1;
} 

console.log("Expensive operation done");

























































