import { createLogicalNot } from "typescript";

//interface is used to create user defined data type
export interface User{
    name: string;
    age?: number;   //age is optional field
    id: number;
    city: string;
}
let user: User = {name: "Rhea", id: 3, city: "Bengaluru"};

interface Employees extends User{
    salary: number;
}

export interface Login{
    login(): User;
}

//array destructuring (no need of using index)
let [user1, user2, ...restUsers]: User[] = [
    { name: "Rhea", id: 3, city: "Bengaluru" },
    { name: "Rhea", id: 4, city: 'Bengaluru' },
    { name: "Rhea", id: 5, city: 'Bengaluru' },
    { name: "Rhea", id: 6, city: 'Bengaluru' },
];
console.log(user1);
console.log(user2);
console.log(restUsers);

let employee: Employees = {name: "Rhea", id: 4, city: "Bengaluru",salary: 4000};
console.log(user);
console.log(employee);