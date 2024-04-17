let score =55;

// let value=String(score);
//converting the Number to String

// console.log(typeof(value));//String

let name="Galaxy"
let name_to_Num=Number(name)

// console.log(typeof name_to_Num)//Number
// console.log(name_to_Num)//NaN=>Not a Number

let starting_Speed=null;
//let speed=Number(starting_Speed)==>Convert it too Number
// console.log(typeof speed)=>Number

let speed=String(starting_Speed)
// console.log(typeof speed)
// console.log( speed)

let undeclare=undefined;
// console.log(Number(undeclare))



let anyNumber=20000;
console.log(Boolean(anyNumber))
//0=>false, apartfrom 0 =>true

let address="11";
console.log(Boolean(address))
//""=>false, "ayvalue"=>true

// *************************operations**************************

console.log(2**3)
// console.log((((3+3)*2)/4))=>3
let gameCounter=200;
// let point=gameCounter++;

// console.log(point++)
// console.log(point)

// console.log(++point)
console.log(gameCounter++)//=> Return the value before incrementing
console.log(++gameCounter)//=> Return the value after incrementing
console.log(gameCounter)