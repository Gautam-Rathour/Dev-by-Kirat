// // Object Methods Explanation

// function objectMethods(obj) {
//     console.log("Original Object: ", obj);


//     let keys = Object.keys(obj);
//     console.log("After Object.keys(): ", keys);

//     let values = Object.values(obj);
//     console.log("After Object.value(): ", values);

//     let entries = Object.entries(obj);
//     console.log("After Object.entries(): ", entries);

//     let hasProp = obj.hasOwnProperty("property");
//     console.log("After hasOwnProperty(): ", hasProp);


// }

// //=======
// const sampleObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3"
// };

// objectMethods(sampleObject);



//=================================================================================================
//=================================================================================================

// // Extre Example for hasOwnProperty :--

// let obj = {
//     name: "Raju Bhai",
//     gender: "male",
//     rollNo: 34
// };

// console.log(obj.hasOwnProperty("rollNo"));

//=================================================================================================
//=================================================================================================

const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

let newObj = Object.assign({}, obj, {key4: "value4"}, { newProperty: "newValue"});
console.log("After Object.assign():", newObj);

//=================================================================================================
//=================================================================================================



























































