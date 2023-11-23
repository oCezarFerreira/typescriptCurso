"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const x = 12;
const y = 20;
console.log(x, y);
const firstName = 'Cezar';
const age = 21;
const isAdmin = true;
console.log(firstName, age, isAdmin);
const myNumbers = [1, 2, 3];
myNumbers.push(4);
console.log(myNumbers);
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
console.log(myTuple);
const user = {
    name: 'Cezar',
    age: 21
};
console.log(user);
let a = 0;
a = 'oi';
a = true;
console.log(a);
let id = '10';
id = 200;
console.log(id);
const userId = '1231';
const productId = 91;
console.log(userId, productId);
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Camisa gola V',
    size: Size.G
};
console.log(camisa);
let auth;
auth = 'autenticado';
auth = null;
console.log(auth);
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 1));
function sayHelloTo(name) {
    return `Hello ${name}!`;
}
console.log(sayHelloTo('Cezar'));
function logger(msg) {
    console.log(msg);
}
console.log(logger('Log'));
function greeting(name, greet) {
    if (!greet) {
        greet = 'Olá';
    }
    console.log(`${greet} ${name}`);
}
greeting('Cezar', 'Bem vindo');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 3, n2: 3 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomeThing(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log('Não foi passado um número!');
}
doSomeThing(false);
doSomeThing(10);
function showArraysItems(arr) {
    arr.forEach(item => console.log(`Item: ${item}`));
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArraysItems(a1);
showArraysItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A role do usuário é ${this.role}`);
            return;
        }
        console.log('Informação restrita');
    }
}
const zeca = new User('Zéca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car('Volkswagen', 4);
console.log(fusca);
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person('Sam');
console.log(sam);
