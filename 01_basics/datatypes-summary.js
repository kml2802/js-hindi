// Primitive

// 7 Types: String, Number, Bolearn, null, undefined, Symbol,
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
 
// console.log(id == anotherid);

// Reference (Non primitive)

// Array, objects, Functions

const heros = ["ironman", "hulk", "spiderman", "blackpanthar"];
//console.log(heros);




//*************************************************//

// stack (Primitive), Heap (non-Primitive)

let myYoutubename = "FactGuru"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kml@google.com"

console.log(userOne.email);
console.log(userTwo.email);