"use strict";
//adding type to named function:
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
//keeping constant value for num3
function add1(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}
console.log(add1(2, 3));
//keeping constant value for num3
function add2(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add2(2, 3));
console.log(add2(2, 3, 1));
//using rest parameter
function summation(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3];
console.log(summation(4, 5, ...numbers));
