//{}//scope
var c=300    //global
let a=400
if(true){      //inner scope
    let a=10
    const b=40
    var c=3
}
console.log(a)
//console.log(b)
console.log(c)

function one()
{
    const username="saumya"
    function two(){
        const website="youtube"
        //console.log(username)
    }
    //console.log(website)
    two()
}
one()
//Clouser
//Its like A elder person cannot est child's icecream but a child can eat elder's icecream

if(true){
    const username="saumya"
    if(username==="saumya")
    {
        const website=" git"
        console.log(username+website)
    }
    //console.log(website)
}
//console.log(username)


//+++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++

console.log(addone(6))//can be declared before also
function addone(num){ //simply its function
    return num+1
}

//addtwo(4)//this is wrong for expression,it can't be accessed before
const addtwo=function(num){ //here its expression
    return num+2
}
console.log(addtwo(5))
