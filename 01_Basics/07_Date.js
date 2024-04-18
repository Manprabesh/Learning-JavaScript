const date=new Date();
// console.log(date.toString())
// console.log(date.toDateString())
console.log(date.toLocaleString())
// console.log(typeof date)

const newDate=new Date(2003, 6, 4, 5,44,44)
console.log(newDate.toDateString())
console.log(newDate.getHours())

console.log(date.getMonth()+1)

console.log(date.toLocaleString('en-US',{
    dateStyle:"full",
}))
//ref to Date =>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date