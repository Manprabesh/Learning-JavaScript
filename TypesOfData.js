//Reference datatype or non-primitive data type

// Symbols are often used to add unique property keys to an object

const id=Symbol("123")
const anotherId=Symbol("123")

// console.table([id,anotherId])
// console.log(id===anotherId)

let empty=null;

//writting "n" in the last of a number considered as BigInt
const BigNumber=80094367728299199282n;//=>80094367728299199282n
//const BigNumber=80094367728299199282;//=>800943677282000000

console.log(BigNumber)

let number=80094367728299199282n;

console.log(BigNumber===number)

let fruits=['apple','mango','grapes'];
console.log(typeof fruits)//=>objects

// console.log(typeof fruits===typeof empty);

function display(){
    console.log("I am a functions");
}

display();
console.log(typeof display)//=>function

let obj={
    name:"Manprabesh Boruah",
    age:21,
    phn_No:99999,
}

console.log(typeof obj)//=>object
