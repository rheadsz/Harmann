import {Login, User} from './interface'
class Employee implements Login{
    //id is private 
    #id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    login(): User {
        return {name: "Rhea", id: 3, city: "Bengaluru"};;
    }
    //getter
    get empid(): number{
        return this.#id;
    }
    //setter
    set empid(id: number){
        this.#id = id;
    }

    

    //static methods can be accessed using class name
    static getCount(): number{
        return 50;
    }

    //class method (no need of putting the keyword function before the method name)
    getNameWithAddress(): string{
        return `${this.name} lives in ${this.address}`;
    }
    getNameWithAge(): string{
        return `${this.name} is 22 years old`;
    }
}

class Manager extends Employee{
    constructor(id: number, name: string, address: string){
        super(id, name, address);
    }
    //since getNameWithAddress() function is in super class this method wont execute
    getNameWithAddress(): string{
        return `${this.name} stays in ${this.address}`;
    }

   
}

let rhea = new Employee(1,"Rhea","Bangalore");
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
