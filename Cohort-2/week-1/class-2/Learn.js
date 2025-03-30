// function sum(a , b) {
//   return a + b;
// }

// let findSum = sum(4, 8);
// console.log(findSum);


// function getLength(str) {
//   console.log(str);
//   console.log("Length ", str.length);
// }

// getLength("HelloWorld");

// const str = "HelloRaju";
// console.log(str, "\n", str.length);

// //=================================================================================================
// //=================================================================================================

// function findIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Target is = ", target);
//     console.log("Index of Target = ",str.lastIndexOf(target));
// }

// findIndexOf("hello world world world" , "world")

//=================================================================================================
//=================================================================================================

// // slice :-

// function getSlice(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After slice:", str.slice(start, end));
//   }
//   getSlice("Hello World", 0, 5);


// function getSlice(str, start, end) {
//     console.log("This the original String = " , str);
 
//     console.log("Get string : " , str.slice(start, end));
// }

// getSlice("muna bhai MBBS", 10, 14);

// let name1 = "SaurabhKumar";
// let print = name1.slice(7,12);
// console.log(print);

// //=================================================================================================
// //=================================================================================================

// function cutIt(str, startIndex, endIndex) {
//     let newStr = "";
//     for(let i=0; i < str.length; i++) {
//         if(i >= startIndex && i < endIndex) {
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr;
// }

// const value = "Harkirat singh";
// let ans = value.slice(2,6);
// console.log(ans);

// console.log(cutIt(value, 2, 6));

//=================================================================================================
//=================================================================================================

// function replaceString(str, target, replacement) {
//     console.log("Original string : ", str);
//     console.log("After replace : ", str.replace(target, replacement));
// }

// replaceString("Hello World", "World", "Saurabh");

// const value = "Hello World";
// let ans = value.replace(value, "Harkirat");
// console.log(ans);

//=================================================================================================
//=================================================================================================
// function splitString(str) {
//     console.log("Original String : ", str);
//     console.log(str.split(" "));
// }

// splitString("hyy my name is harkirat");

// const value = "hyy my name is harkirat";
// const world = value.split(" ");
// console.log(world);

//=================================================================================================
//=================================================================================================

// // trim
// function trimString(str) {
//     console.log("Original Str :" , str);
//     console.log("After Trim :", str.trim());
// }
// trimString("        Raju bhai");
// //==============

// const value = "        Raju bhai";
// console.log(value);
// const world = value.trim();
// console.log(world);

// //=================================================================================================
// //=================================================================================================

// // toUppenCase :- 
// function toUpperCase(str) {
//     console.log("Original str :" , str);
//     console.log("After change :" , str.toUpperCase());
// }
// toUpperCase("Harkirat Singh");

// const value = "   Harkirat Singh";
// const ans = value.toUpperCase();
// console.log(ans);

// //=================================================================================================
// // toLowerCase :-
// function toLowerCase(str) {
//     console.log("Original str :" , str);
//     console.log("After change :" , str.toLowerCase());
// }
// toLowerCase("Harkirat SINGH");

// const value2 = "   Harkirat Singh";
// const ans2 = value2.toLowerCase();
// console.log(ans2);

// //=================================================================================================
// //=================================================================================================

// console.log(parseInt("42"));
// console.log(parseInt("42px"));
// console.log(parseInt("3.14"))


// // Example Usage for parseFloat :-
// console.log(parseFloat("42"));
// console.log(parseFloat("42paaaax"));
// console.log(parseFloat("3.14"));


// function explainParseInt(value) {
//     console.log("Original Value:", value);
//     let result = parseInt(value);
//     console.log("After parseInt:", result);
//   }
  
//   // Example Usage for parseInt
//   explainParseInt("42");
//   explainParseInt("42px");
//   explainParseInt("3.14");
  
//   function explainParseFloat(value) {
//     console.log("Original Value:", value);
//     let result = parseFloat(value);
//     console.log("After parseFloat:", result);
//   } 
  
//   // Example Usage for parseFloat
//   explainParseFloat("3.14");
//   explainParseFloat("42");
//   explainParseFloat("42px");
  
// //=================================================================================================
// //=================================================================================================

// // Array :-

// const initialArray = [1,2,3];
// // initialArray.push(2); 
// // console.log(initialArray); // [1,2,3,2];

// // initialArray.pop();
// // initialArray.shift();
// initialArray.unshift(0);
// console.log(initialArray);

// //=================================================================================================

// //concat 
// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const array3 = array1.concat(array2);
// console.log(array3);

// function array(array1, array2) {
//     console.log("Original array1 : ", array1);
//     console.log("Original array2 : ", array2);
//     console.log("After change : ", array1.concat(array2));
// }   

// array([1,2,3], [4,5,6]);

// //=================================================================================================
// //=================================================================================================
 
// const initialArray = [1, 2, 3, 4];

// // for(let i= 0; i<initialArray.length; i++) {
// //     console.log(initialArray[i])
// // }

// function logThing(str) {
//     console.log(str, "is the string");
// }

// // [1, 2, 3]
// initialArray.forEach(logThing);

// //=================================================================================================
// //=================================================================================================
 
// function log1() {
//     console.log("Hello World 1");
// }

// function log2() {
//     console.log("Hello World 2");
// }

// function logWhatsPresent(fn) {
//     fn();
// }

// logWhatsPresent(log2);


// //=================================================================================================
// //=================================================================================================
 
// callbacks, map, filter, find, sort --------

// //=================================================================================================
// //=================================================================================================
// //=================================================================================================
// //=================================================================================================
 





//=================================================================================================
//=================================================================================================
 
// const dog = {
//     name: "doggie gi",
//     legCouint: 4,
//     speaks: "bhow bhow",
// };

// const cat = {
//     name: "cat ka bacha", 
//     legCouint: 4,
//     speaks: "meow",
// };

// function printStr(animal) {
//     console.log("animal " + animal["name"] + " " + animal["speaks"]);
// }

// // animal x bhow bhows with 2 legs

// printStr(dog);
// printStr(cat); 

//=================================================================================================
//=================================================================================================
 
// // legCount, speak, name 
// class Animal {
//     constructor(name, legCount, speaks) {
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks;
//     } 
//      static myType() {
//         console.log("Anmial");
//     }
//     speak() {
//         console.log("hy there " + this.speaks);
//     }  
// }

// console.log(Animal.myType());
// let dog = new Animal("dog", 5, "bhow bhow");//ncreate object
// let cat = new Animal("cat ki bachi", 4, "meow");
// // dog.speak(); // call function on object






//=================================================================================================
//=================================================================================================
 //=================================================================================================
//=================================================================================================
 //=================================================================================================
//=================================================================================================
 //=================================================================================================
//=================================================================================================
 

// //  Date and Time :-

// const currentDate = new Date();

// console.log(`Date    : ${currentDate.getDate()}`);
// console.log(`Month   : ${currentDate.getMonth() + 1}`);
// console.log(`Year    : ${currentDate.getFullYear()}`);
// console.log(`Hours   : ${currentDate.getHours()%12}`);
// console.log(`Minutes : ${currentDate.getMinutes()}`);
// console.log(`Seconds : ${currentDate.getSeconds()}`);

// console.log( currentDate.getTime());

//=================================================================================================
//=================================================================================================
 
// function calculatSum(n) {
//     let a = 0;
//     for(let i=0; i<n; i++) {
//         a = a + i
//     }
//     return a;
// }

// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime();
// calculatSum(10000000);

// const afterDate = new Date();
// const afterTimeInMs = beforeDate.getTime();

// console.log(afterTimeInMs - beforeTimeInMs)

//=================================================================================================
//=================================================================================================
 
// function currentTimePrint() {
//     console.log(new Date().getTime());
// }
// setInterval(currentTimePrint, 1000);   

//=================================================================================================

// const Users = {
//     name: "harkarit",
//     age: 30,
//     gender: "male",
// }

// console.log(Users["name"]);

//=================================================================================================

// const Users = `{"name": "raju", "age" : 23, "gender": " male"}`

// // JSON.parse
// //JSON.stringify


// const user = JSON.parse(Users)
// console.log(user["gender"])

// // JSON.stringify
// const user = {
//     name: "Harkirat",
//     gender: "male"
// }

// const finalString = JSON.stringify(user)
// console.log(finalString["name"])

//=================================================================================================
//=================================================================================================

// let randomNum = Math.random();
// console.log(randomNum*1000000);

// let randomNum = Math.floor(2.99);
// console.log(randomNum);

// let randomNum = Math.ceil(2.1);
// console.log(randomNum);

// let randomNum = Math.round(2.3);
// console.log(randomNum);


// let randomNum1 = Math.pow(2, 10);
// console.log(randomNum1);

// let randomNum2 = Math.sqrt(10);
// console.log(randomNum2);


// let randomNum1 = Math.max(23, 45, 98, 25, 22);
// console.log(" this number is max num : " + randomNum1);

// let randomNum2 = Math.min( 23, 45, 98, 25, 22);
// console.log(" this number is min num : " +randomNum2);

//=================================================================================================
//=================================================================================================

// 


































































































































