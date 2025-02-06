//if
const userlog=true
if(userlog){//if true code executes ,if falls it don't

}
//<userlog,>,<=,>=,==,!=,===(checks type also),!==
const temp=41
if(temp<50){
    console.log("less than 50")
}
else if(temp<100){
    console.log("temp is greater than 50 & less than 100")
}
else{
    console.log("greatar than 100")
}

const score=200
if(score>100)
{
    const power="fly"
    console.log(`user power: ${power}`)
}

const balance=1000
//can be written but its immature
/*if(balance>500)console.log("test"),
console.log("test2");*/

const userlogin=true
const debitcard=true
if(userlogin&&debitcard){
    console.log("Allow to buy course")
}
if(userlogin||debitcard){
    console.log("Allow to buy course")
}

//Nullish Coalescing Operator(??):null undefined
let val1
val1=5??10 //5
val1=null??10 //10
val1=undefined??30 //30
val1=null??10??20 //10

//Terniary Operator
//condition?true:false
const iceTeaPrice=100
icePTeaPrice>=80?console.log("less than 80"):
console.log("more than 80")



