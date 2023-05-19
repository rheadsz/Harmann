"use strict";
let names = 'Rhea';
let newname = names.toUpperCase(); //converts lowercase to uppercase
console.log(newname);
let emplist; //declaring array of type string
emplist = ["Rhea", "Alston", "Tanya"];
let results = emplist.find((emp) => emp === "Alston");
console.log(results);
let empid; //declaring array of type number
empid = [1, 2, 3];
let display = empid.filter((emp) => emp > 2);
console.log(display);
//using reduce to calculate sum of an array
let sum = empid.reduce((acc, num) => acc + num);
console.log(sum);
//swap numbers using tuples
let final; //declaring an array of type num
function swapnums(num1, num2) {
    return [num2, num1]; //returns an array
}
final = swapnums(10, 20); //function call
console.log(final);
