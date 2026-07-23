// #primitive

// 7 types: String, number,Boolean,Null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 854851218451854841n

console.log(bigNumber);

// Refrence(Non Primitive)

//Array,Objects,Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"viss",
    age:22,
}

const myFunction = function(){
    console.log("hello");
}

console.log(heros);