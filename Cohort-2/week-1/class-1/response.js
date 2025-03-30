
// let firstName = "Raju";
// let secondName = "Bhai";

// console.log("Hello " + firstName + secondName);

//============================================================================
//============================================================================

// // let male = "raju";
// let female = "sona";

// if(male) {
//     console.log("hello mr " + male);
// } else {
//     console.log("hello miss " + female);
// }


//============================================================================
//============================================================================

// for(let i=0; i<=100; i++) {
//     console.log(i);
// }


//============================================================================
//============================================================================

// Variables ( var , let , const )

// let  a = 2;
// a = 7;
// console.log(a);


// const a = 2;
// a = 7;
// console.log(a);


// var a = 3;
// a = 5;
// console.log(a);

// let firstName = "Saurabh";
// let age = 22;
// let isMarried = false;

// //console.log("This person name is " + firstName + " and This porsons age is " + age + " and he is married true/false = " + isMarried)

// if(isMarried) {
//     console.log(firstName + " is married.");
// } else {
//     console.log(firstName + " is not married.")
// }

//============================================================================
//============================================================================

// let sum = 0;
// for(let i=1; i<=1000000000; i++) {
//     sum += i;

// }
// console.log(sum);

//============================================================================
//============================================================================
// // Arrays :- 

// const ages = [21, 22, 23, 24, 25, 26, 98, 100];
// const numberOfPeople = ages.length;

// for(let i=0; i<=numberOfPeople; i++) {
//     if(ages[i] % 2 == 0) {
//         console.log(ages[i]);
//     }
// }

//============================================================================
//============================================================================

// const personArray = ["raju", "mohan", "priya", "mohit"];
// const genderArray = ["male", "male", "female", "male"];

// const numOfUser = personArray.length;

// for(let i=0; i<=numOfUser; i++) {
//     if(genderArray[i] == "male") {
//         console.log(personArray[i]);
//     }
// }

// const users1 = {
//     firstName : "Raju",
//     gender : "male",
//     age : 23
// }

//  console.log(users1["firstName"]);


// const allUsers = [{
//     firstName: "harkirat",
//     gender : "male"
// }, {
//     firstName : "muna",
//     gender : "male",
//     metadata: {
//         age: 21,
//         address: " "
//     }
// }, {
//     firstName : "priya",
//     gender : "female"
// }]

// for(let i = 0; i < allUsers.length; i++) {
//     if(allUsers[i]["gender"] == "male") {
//         console.log(allUsers[i]["firstName"]);
//     }
// }

//============================================================================
//============================================================================
// Function :-

// function findSum(a, b) {
//     return a + b;
// }

// console.log(findSum(3,5));

//============================================================================
//============================================================================

// function sum(num1, num2, fnToCall) {
//     let result  = num1 + num2;
//     // displayResultPassive(result);
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }


// const data = sum(4,3,displayResult);
// // displayResult(data);
// // displayResultPassive(data)

// //============================================================================
// //============================================================================
   
// function calculateArithmetic (a, b, arithmeticFinalFunction) {
//  const ans = arithmeticFinalFunction(a,b);
//  return ans;
// }

// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// const value = calculateArithmetic(6, 2, sum);
// console.log(value);

//============================================================================
//============================================================================

// // setTimeout :-


// function greet() {
//     console.log("hello world");
// }

// function greetAlient() {
//     console.log("hello alien");
// }
 
// // setTimeout(greet, 4000);
// // setTimeout(greetAlient, 2000);

// // setInterval(greetAlient , 1000);
// setTimeout(greetAlient, 1000);

// function setInteval(a, duration) {
//     a();
// }

//============================================================================
//============================================================================
//    function sum(num1, num2, fnToPass) {
//     let result = num1 + num2;
//     // return result;
//     return fnToPass(result)
//    }

// function displayResult(data) {  
//     console.log( "Result of the sum is : " + data);
// }

// sum(5, 7, displayResult);


//============================================================================
//============================================================================

// function doSomething(a, b, type) {
//     if(type == "sum") {
//         return a + b;
//     }
//     if(type == "sub") {
//         return a - b;
//     }
// }

// let type = "sum"
// console.log(doSomething(13,8,type));

//============================================================================
//============================================================================

// function hello(prometer1, prometer2) {
//     console.log(prometer1, prometer2);
// }

// setTimeout(hello, 2000, prometer1, prometer2)

//============================================================================
//============================================================================

// const user = {
//     name: "harkirat", 
//     age: 21,
//     address: {
//         houseNumber: "23",
//         street: 1
//     }
// }

// console.log(user["address"]["houseNumber"])
// console.log(user["age"])

// const address = user["houseNumber"];
// const houseNumber = address["houseNumber"];

// console.log(houseNumber);

//============================================================================
//============================================================================

// const button = document.getElementById("stop-btn");

// function showTime() {
//     const currentTime = new Date;
    
//     const time = `${currentTime.getHours()}: ${currentTime.getMinutes()}: ${currentTime.getSeconds()}`


//     let showtime = document.getElementById("time");
//     showtime.innerText = time;

// }


// let interval = setInterval(showTime, 1000);

// button.addEventListener("click", () =>{
//     clearInterval(interval);
// });

//============================================================================
//============================================================================

// const button = document.getElementById("stop-btn");

// function showTime() {
    
//     const currentTime = new Date;
//     const time = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`
//     console.log(time);
//     const showtime = document.getElementById("time");
//     showtime.innerText = time;
// }


// const interval = setInterval(showTime, 1000);

// button.addEventListener("click",() => {
//     clearInterval(interval);
// });

//============================================================================
//============================================================================

// const button = document.getElementById("stop-btn");

// function showTime() {

//     const currentTime = new Date;
//     const time = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`
    
//     let showTime = document.getElementById("time");
//     showTime.innerText = time;

// }   


// const interval = setInterval(showTime, 1000);
// button.addEventListener("click", () => {
//     clearInterval(interval);
// });

//============================================================================
//============================================================================













