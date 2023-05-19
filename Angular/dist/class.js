"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        //id is private 
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: "Rhea", id: 3, city: "Bengaluru" };
        ;
    }
    //getter
    get empid() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    //setter
    set empid(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    //static methods can be accessed using class name
    static getCount() {
        return 50;
    }
    //class method (no need of putting the keyword function before the method name)
    getNameWithAddress() {
        return `${this.name} lives in ${this.address}`;
    }
    getNameWithAge() {
        return `${this.name} is 22 years old`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    //since getNameWithAddress() function is in super class this method wont execute
    getNameWithAddress() {
        return `${this.name} stays in ${this.address}`;
    }
}
let rhea = new Employee(1, "Rhea", "Bangalore");
console.log(rhea);
let address = rhea.getNameWithAddress();
console.log(address);
let address2 = rhea.getNameWithAddress();
console.log(address2);
let age = rhea.getNameWithAge();
console.log(age);
//calling static method
console.log(Employee.getCount());
rhea.empid = 100;
console.log(rhea.empid);
console.log(rhea.login());
