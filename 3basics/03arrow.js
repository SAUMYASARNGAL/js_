//this refers to the current context

const user={
    username:"saumuuu",
    price:99,

    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()

console.log(this)//In node enviornment it refers to empty as no context in global environment
//In console u get windows events as in browser it has windows in global

function chai()
{
    console.log(this)
}
chai()

function chayy()
{
    let user="sss"
    console.log(this.user)//context doesn't work in functions
}
chayy()

const chy=function chayy()
{
    let user="sauuu"
    console.log(this.user)  //Not work here too
}
chy()

const cii=()=>{//arrow function
    let username="saumya"
    console.log(this.username)
}
cii()


//()=>{}

//Basic arrow function explict
//In curly brace u have to use return
const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(3,4))

//Implicit arrow function(curly brace not used)

//const addttwo=(num1,num2)=>(num1+num2)
const addttwo=(num1,num2)=>({username:"sam"})
console.log(addttwo(3,4))

//sometimes we use it like this
const arrayy=[2,4,5,6]
arrayy.forEach(()=>{})


