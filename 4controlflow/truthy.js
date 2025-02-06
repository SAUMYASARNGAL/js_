const useremail="saumya@gmail.com"
if(useremail){
    console.log("got it")
}
else{
    console.log("not found")
}

//falsy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy
//"0",'false'," ",[],{},function(){}

if(useremail.length===0){
    console.log("array is empty")
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
}
