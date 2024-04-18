//Array is resizeable in javascript

const num=[1,2,3,4,5];

num.push(6)//add element to the last of the element
num.push(7)
num.push("hero")
num.push(8)
num.push(9)
num.pop()//delete the last element
// num.unshift("At the first")//At element at the first
// num.shift() //Delete the first element


// for(let i=0;i<num.length;i++){
//     console.log(num[i])
// }
// console.log(num.indexOf("hero"))

const myarr=num.slice(1,3)

console.log(myarr)
console.log(num)

const newArr=num.splice(1,3)
console.log(newArr)
console.log(num)