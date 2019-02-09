// import {} from './datatypes';

export class Employee {
    name: string;
    address: IAddress;
    age: number;

    constructor(name: string, addr: IAddress, age: number) {
        this.name = name;
        this.address = addr;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}
// let emp = new Employee();
// emp.address = 'Pune';
// emp.name = 'employee1';
// emp.age =10;
let address: IAddress = {
    addressLine1: 'Pune',
    addressLine2: 'city',
    city: 'Pune',
    pin: 411061
}
let emp = new Employee('employee1', address , 18);
console.log(emp.getName());
console.log(emp);

export interface IAddress<T> {
    addressLine1: string;
    addressLine2: string;
    city: string;
    pin: number;
    data: T
}
