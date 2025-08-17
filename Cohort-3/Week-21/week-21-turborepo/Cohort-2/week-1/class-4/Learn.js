
//=================================================================================================
//=================================================================================================
  
// function findSum (n) {
//     let ans = 0;
//     for(let i=1; i<=n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100() {
//     console.log(findSum(100))
// }

// // // busy waiting
// // function syncSleep() {
// //     let a = 1;
// //     for(let i=0; i<1000000000; i++) {
// //         a++;
// //     }
// // }
// // syncSleep();
 

// setTimeout(findSumTill100, 1000);

// console.log("Hello world");

//=================================================================================================
//=================================================================================================
  
// const fs = require("fs");
// // filesystem module

// fs.readFile("a.txt", "utf-8", function (err, data) {
//     console.log(data);

// })

//=================================================================================================
//=================================================================================================
  
// // ==> pending, resolved, rejected.

// var d = new Promise(function (resolve){
//     setTimeout(function() {
//         resolve("foo");
//     }, 1000);
    
// });

// function callback() {
//     console.log(d);
// }

// // console.log(d)
// d.then(callback); 



// let p = new Promise(function(resolve) {
//     resolve("hii there");
// })

// p.then(function() {
//     console.log(p)
// })

//=================================================================================================
//=================================================================================================
  
function kiratsAsyncFunction() {
    let p = Promise(function(resolve) {
        // do some async logic here
        resolve("hi there");
    });
    return p;
}

function main() {
    kiratsAsyncFunction().then(function(value) {
        console.log(value);
    });
} 

main();


//=================================================================================================
//=================================================================================================
    
// function kiratsAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         // do some async logic here
//         resolve("hi there!")
//     });
//     return p;
// }

// async function main() {
//     const value = await kiratsAsyncFunction();
//     console.log(value);
// }

// main();




























































