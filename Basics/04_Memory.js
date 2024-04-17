//stacks (primitive), Heap(Non-primitive)
//Under stacks the data is copied

let age=32;
let peopleAge=age+1;

console.table([age,peopleAge])

let data={
    user:"yourName@gmail.com",
    upi_Id:"@ybl3433"
}

let info=data;

info.user="ManBash@gmail.com"
console.table([data.user, info.user])