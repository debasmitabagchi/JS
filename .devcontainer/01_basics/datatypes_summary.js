// Primitive datatype (Call by value)

// 7 types : String, Number, Boolean. null, undefined,Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId);

const bigNumber = 9009237196482359327253715374235437n
// console.log(bigNumber);


// Reference Datatype (Non Primitive)

// Array, Objects, Functions

const heros = ["Batman","Superman","Spiderman"] //array

let myObj={
    name :"Debasmita",                          //object
    age:23,
}

// const myFunction = function(){
//     console.log("Hello World");
    
// }

// console.log(typeof bigNumber);
// console.log(typeof score);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof myObj);
// console.log(typeof heros);
// console.log(typeof myFunction);

// Stack (Primitive)

let myYouTubename = "hiteshchoudharydotcom"

let anothername = myYouTubename
anothername = "Chai_aur_Code"

console.log(myYouTubename);
console.log(anothername);

// Heap (Non-Primitive)

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let  userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);



