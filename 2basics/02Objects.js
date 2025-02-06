//singleton -->When made from constructor
//When declare from literals singleton isn't made
//object.create


//object literals
myarray=["s","a"]

const mysim=Symbol("key1")//declaration of symbol

const jsuser={
    name:"saumya",
    "fullname":"saumya sarngal",
    [mysim]:"airtel",//symbol
    age:19,
    location:"Banglore",
    email:"saumya@gmial.com",
    isloggedin:false
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["fullname"])
console.log(jsuser.mysim)//but here its used as string
console.log(jsuser[mysim])//so its type is sumbol

jsuser.email="saumyasaumya@google.com"
//Object.freeze(jsuser)//If we do this we cant propogate changes
jsuser.email="saumya@amazon.in"
console.log(jsuser)

jsuser.greet1=function(){
    console.log("Hello js user");
}
jsuser.greet2=function(){
    console.log(`Hello Js user,${this.name}`)//To reference same object we use this
}
console.log(jsuser.greet1())
console.log(jsuser.greet2())


//const user=new Object()//singleton object
const user={}//non-singleton object
user.id="1233"
user.name="saumuuu"
user.isloggedin="false"
console.log(user)

const regularuser={
    email:"x@gmail.com",
    fullname:{
        userfullname:{
            firstname:"saumya",
            lastname:"sarngal"
        }
    }
}
console.log(regularuser.fullname)
console.log(regularuser.fullname?.userfullname)//we use ? just for if it doesn't exist we see inside


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}//this will have similar problem of object within object ,tht we got in array within array before
//const obj3=Object.assign(obj1,obj2)//we can also do assign({},obj1,obj2) just to make clear obj1&2 are going in source{}
const obj3={...obj1,...obj2}
console.log(obj3)

const abc=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]

console.log(abc[1].email)

console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))

//if value doesn't exist chances of crash so we use
console.log(user.hasOwnProperty("isloggedin"))


const course={
    coursename:"js course",
    price:999,
    courseinstructor:"saumya"
}
//course.coursename
const{courseinstructor:instructor}=course
console.log(instructor)





//To api,   values come in form of json(js object notation)
/*Eg:
{
    "name":"saumya",
    "coursename":"heelyaa",
    "price":"free"
}

[
    {},
    {},
    {}
]
//use API random user generator for help
*/







