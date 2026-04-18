//problem-1 => object convert to string
const obj = { a: 1, b: 2 };
//console.log(typeof obj); //object
const convertString = JSON.stringify(obj); //convert string
//console.log(typeof convertString); //out put string

//problem-2 create 2 array then together 2 array

const name1 = ["sabbir", "miut"];
const name2 = ["abir", "foluk"];

const result = [...name1, ...name2];
console.log(result);
console.log("hello");
