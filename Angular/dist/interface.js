"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "Rhea", id: 3, city: "Bengaluru" };
//array destructuring (no need of using index)
let [user1, user2, ...restUsers] = [
    { name: "Rhea", id: 3, city: "Bengaluru" },
    { name: "Rhea", id: 4, city: 'Bengaluru' },
    { name: "Rhea", id: 5, city: 'Bengaluru' },
    { name: "Rhea", id: 6, city: 'Bengaluru' },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let employee = { name: "Rhea", id: 4, city: "Bengaluru", salary: 4000 };
console.log(user);
console.log(employee);
