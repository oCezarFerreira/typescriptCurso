// Tipos primitivos -> string, number, boolean

// inferência x annotation
const x = 12
const y: number = 20

console.log(x, y)

// tipos básicos
const firstName: string = 'Cezar'
const age: number = 21
const isAdmin: boolean = true

console.log(firstName, age, isAdmin)

// Object
const myNumbers: number[] = [1, 2, 3]
myNumbers.push(4)

console.log(myNumbers)

// tuplas
let myTuple: [number, string, string[]]

myTuple = [5, 'teste', ['a', 'b']]
console.log(myTuple)

// object literals -> {prop: value}
const user: {name: string, age: number} = {
  name: 'Cezar',
  age: 21
}

console.log(user)

// any
let a: any = 0
a = 'oi'
a = true

console.log(a)

// union type
let id: string | number = '10'
id = 200

console.log(id)

// type alias
type myIdType = number | string

const userId: myIdType = '1231'
const productId: myIdType = 91

console.log(userId, productId)

// enum
enum Size {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande'
}

const camisa = {
  name: 'Camisa gola V',
  size: Size.G
}

console.log(camisa)

// literal types
let auth: 'autenticado' | null
auth = 'autenticado'
auth = null
console.log(auth)

// funções
function sum(a: number, b: number): number {
  return a + b
}
console.log(sum(1, 1))

function sayHelloTo(name: string): string {
  return `Hello ${name}!`
}
console.log(sayHelloTo('Cezar'))

function logger(msg: string): void{
  console.log(msg)
}
console.log(logger('Log'))

function greeting(name: string, greet?: string): void {
  if (!greet) {
    greet = 'Olá'
  }

  console.log(`${greet} ${name}`)
}
greeting('Cezar', 'Bem vindo')

// interfaces
interface MathFunctionParams {
  n1: number,
  n2: number
}

function sumNumbers(nums: MathFunctionParams): number {
  return nums.n1 + nums.n2
}
console.log(sumNumbers({ n1:3, n2:3 }))

function multiplyNumbers(nums: MathFunctionParams): number {
  return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10
}
console.log(multiplyNumbers(someNumbers))

// narrowing (checagem de tipos)
function doSomeThing(info: number | boolean ): void {
  if (typeof info === 'number') {
    console.log(`O número é ${info}`)
    return
  }
  console.log('Não foi passado um número!')
}
doSomeThing(false)
doSomeThing(10)

// generics
function showArraysItems<T>(arr: T[]) {
  arr.forEach(item => console.log(`Item: ${item}`))
}
const a1 = [1, 2, 3]
const a2 = ['a', 'b', 'c']
showArraysItems(a1)
showArraysItems(a2)

// classes
class User {
  name
  role
  isApproved

  constructor(name: string, role: string, isApproved: boolean){
    this.name = name
    this.role = role
    this.isApproved = isApproved
  }

  showUserName(): void {
    console.log(`O nome do usuário é ${this.name}`)
  }

  showUserRole(canShow: boolean): void {
    if (canShow) {
      console.log(`A role do usuário é ${this.role}`)
      return
    }
    console.log('Informação restrita')
  }
}

const zeca = new User('Zéca', 'Admin', true)
console.log(zeca)

zeca.showUserName()
zeca.showUserRole(true)

// Interfaces em classes
interface IVehicle {
  brand: string
  showBrand(): void
}

class Car implements IVehicle {
  brand
  wheels

  constructor(brand: string, wheels: number) {
    this.brand = brand
    this.wheels = wheels
  }

  showBrand() {
    console.log(`A marca do carro é ${this.brand}`)
  }
}

const fusca = new Car('Volkswagen', 4)
console.log(fusca)

// Herança
class SuperCar extends Car {
  engine

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels)
    this.engine = engine
  }
}

const a4 = new SuperCar('Audi', 4, 2.0)
console.log(a4)
a4.showBrand()

// decorators

// constructor decorator
function BaseParameters() {
  return function<T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      id = Math.random()
      createdAt = new Date()
    }
  }
}

@BaseParameters()
class Person {
  name

  constructor(name: string) {
    this.name = name
  }
}

const sam = new Person('Sam')
console.log(sam)