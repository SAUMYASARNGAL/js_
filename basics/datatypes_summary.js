/*On the basis of how we are keeping and accessing our data in the memory
data is categorised into*/
//1.Primitive
  //Has 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt
    const score=100
    const scoreval=100.3
    const islogged=false
    const out=null
    let userid
    const id=Symbol('123')
    const id2=Symbol('123')
    console.log(id==id2)
    const bignum=1234566554334n
    
    
//2.Reference(Non primitive)
  //Arrays,Objects,Functions
  const heroes=["shaktiman","superman"]
  let myobj={
    name:"Saumya",
    age:19
  }
  const myfunc = function(){
    console.log("helloo")
  }
  console.log(typeof myfunc)