//Date represent single moment beginning from jan 1,1970
//In future temporal for global 

let myDate =new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)

//let mydate=new Date(2023,0,13)//date month starts from 0
//let mydate=new Date("01-14-2023")
let myydate=new Date("2025-01-01")
console.log(myydate.toLocaleString())

let timestamp=Date.now()
console.log(timestamp)//we get in millisecond
console.log(myydate.getTime())//use millisecond to compare

console.log(Math.floor(Date.now()/1000))//we convert to second by /1000

let newdate=new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)
console.log(newdate.getDay())

newdate.toLocaleString('default',{
    weekday:"long"
})
console.log(newdate)






