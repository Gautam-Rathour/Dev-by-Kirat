// const rect1 = {
//     width: 2,
//     height:3,
//     color: "red"
// }


// function area(rect) {
//     const ans = rect.width * rect.height;
//     return ans;
// }

// const result = area(rect1);
// console.log(result);

// ===========================================================================
// ===========================================================================

// class Rectangle {
//     constructor(width, height, color) {
//          this.width = width;
//          this.height = height;
//          this.color = color; 
//     }
    
//     area() {
//         const area = this.width * this.height;
//         const area2 = () => {
//             return this.width * this.height;
//         }
//         console.log(area2());
//           return area;
//     }
    
//     print() {
//              console.log(`Painting with color ${this.color}`);
//     }
//  }

//  const rect = new Rectangle(2, 4, "red");
//  const rect2 = new Rectangle(20, 5, "balck");

//  const area = rect.area();
//  const area2 = rect2.area();

//  rect.print();
//  console.log(area);
 
// ===========================================================================

// let rect3 = {
//     width: 20,
//     height: 10
// }

// function area(rect) {
//     return rect.height * rect.width;
// }

// console.log(area(rect3));

// ===========================================================================
// ===========================================================================

// const date = new Date();
// console.log(date.getFullYear());

// let user = {
//     name: "Mohit",
//     age : 34
// }
// console.log(user.name);
// user.name = "raman";
// console.log(user.name);


// const map = new Map();
// map.set("name", "Mohit");
// map.set("age", 45);
// map.set("color","white");
// console.log(map.get("name"));
// console.log(map.get("color"));

// ===========================================================================
// ===========================================================================


// function waitFor3S(resolve) {
//     setTimeout(resolve, 3000);
// }
// function main() {
//     console.log("main is called");
// }
// waitFor3S(main);

// ====================================

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// function afterDon () {
//     console.log("5 seconds have passed");
// }

// // Callback : --
// // setTimeout(logName, 2000);

// // Promish  (Callback) : ---
// let p = setTimeoutPromisified(3000);
// console.log(p);


// ====================================

// function random(resolve) {  //resolve is also a function
//     resolve();
// }

// let p = new Promise(random); // supposed to return u something eventually

// //using the eventural value returned by the promise : --
// function callback() {
//     console.log("promise succeded");
// }
// p.then(callback);

// ====================================
// ====================================

// const fs = require("fs");

// console.log("top of the file");

// function readTheFile(resolve) {
//     console.log("readTheFile called");
//     setTimeout(function() {
//         console.log("callback based setTimeout completed");
//         resolve();
//     }, 3000)
// }

// function setTimeoutPromisified(fileName) {
//     console.log("setTimeoutPromisified called")
//     //read the file and return its value
//     return new Promise(readTheFile);
// }

// const p = setTimeoutPromisified();

// function callback() {
//     console.log("timer is done");
// }

// p.then(callback);
// console.log("------end of the file--------");

// ====================================

// class Promise2 {
//     constructor(fn) {
//         function afterDone() {
//             this.resolve();
//         }
//     }
//     then(callback) {
//         this.resolve = callback;
//     }
// }

// function readTheFile(resolve) {
//     setTimeout(function() {
//         console.log("callback based setTimeout completed");
//         resolve();
//     })
// }

// function setTimeoutPromisified() {
//     return new Promise2(readTheFile);
// }

// let p = setTimeoutPromisified();

// function callback() {
//     console.log("callback has been called");
// }
// p.then(callback);

// ===========================================================================
// ===========================================================================

// //the real operation that we want to promisfy
// function doAsyncOp (resolve) {
//     setTimeout(resolve, 3000);
// }

// function setTimeoutPromisified() {
//     return new Promise(doAsyncOp);
// }

// const p = setTimeoutPromisified();
// function callback() {
//     console.log("3 seconds have passed");
// }
// p.then(callback);

// ============================================

// function setTimeoutPromisified(time) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, time);
//     })
// }

// function callback() {
//     console.log("Time is passed");
// }

// const p = setTimeoutPromisified(5000) 
// p.then(callback);

// ============================================
// ============================================

// function promiseFn (resolve) {
//     let c = 0;
//     for(let i=0; i<1000000000; i++) {
//         c++;
//     }
//     resolve("hi there harkirat");
// }

// const p = new Promise(promiseFn);

// function callback(str) {
//     console.log(str);
// }
// p.then(callback);

// // ============================================
// function doTimeCall(resolve) {
//     console.log("hyy");
// }

// function setTimeoutAsync() {
//     return new Promise(doTimeCall);
// }

// const p = setTimeoutAnync();

// p.then(function() {
//     console.log("hi");
// })


// // ============================================
// // importent  :: -----

// let str = "harkirat";

// let spliteStr = str.split("");
// console.log(spliteStr); // harkirat
// let sortedStr = spliteStr.sort();

// console.log(sortedStr.join(""));



// // ========================================================================================
// // ========================================================================================




































































































































































