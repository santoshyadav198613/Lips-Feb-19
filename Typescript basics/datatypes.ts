import { IAddress, Employee } from './class';

const age: number;
let addrress: Array<IAddress<number>>;
let fname: string = 'yash';
console.log(fname);
let lname: string;
console.log(lname);
let age = 10;
console.log(age);
let years: number;
console.log(years);
let valid: boolean = false;
console.log(valid);
let dob: Date = new Date();
console.log(dob);
let employee: any;

employee = 10;
employee = 'Yash';
employee = true;

employee = { name: 'Raj', age: 10 };

console.log(employee);

let response: string | string[] | number; //union data type

response = ['a', 'b'];
response = 'pune';
response = 10;

let empName: string[];

empName = ['A', 'B'];

for (let emp of empName) {
    console.log(emp);
}

for (let emp in empName) {
    console.log(emp);
}

function add(number1: number, number2: number,
    number3 = 4, number4?: number): number {
    console.log(number3);
    console.log(number4);
    return number1 + number2;
}

console.log(add(12, 243, 56));

//arrow function
const addnumber = (a: number, b: number, c: number, d: number) => {
    return a + b + c + d;
}

console.log(addnumber(1, 2, 3, 5));

const pi = 4.13;

