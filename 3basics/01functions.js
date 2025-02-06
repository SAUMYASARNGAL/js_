//Function is like a package which we can take 
function sayname(){
    console.log("S")
    console.log("A")
    console.log("U")
    console.log("M")
    console.log("Y")
    console.log("A")
}
//sayname()

/*function addnum(num1,num2)//parameter
{
    console.log(num1+num2)
}
const res=addnum(3,5)//arguments
console.log("Result: ",res)
*/
function addnum(num1,num2)//parameter
{
   return num1+num2
   console.log("after return its unreachable")
}
const res=addnum(4,5)
console.log(res)

function loginusermsg(username){//we can also give a defauly value as(username="fjj")
    if(username===undefined)//If we pass nothing it gives undefined so its better we do if
    {                       //we can also write if(!username) this is equivalent to previous
        console.log("Please enter username")
        return
    }
    return`${username} just logged in`
}
console.log(loginusermsg("saumya"))

//... is reat and spread operator based on it usage
function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,300,10,4000))

const user={
    username:"saumuuu",
    price:1999999
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleobject(user)
handleobject({
    username:"sachi",
    price:1
})

const mynewarray=[200,900,300,400]

function returnsecval(getarr){
    return getarr[1]
}
console.log(returnsecval(mynewarray))//or u can directly write in it
