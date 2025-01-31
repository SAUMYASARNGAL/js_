//******Conversion******//
let score="33abc"
console.log(typeof score)
let valnum=Number(score)
console.log(typeof(valnum))
console.log(valnum)

//"33"=>33
//"33abc"=>NaN
//"true"=>1;"false"=>0
//undefined=>Nan
//null=>0
let islogged=1
let valbool=Boolean(islogged)
console.log(valbool)

//1=>true; 0=>false
//""=>false
//"hello"=>true

let somenum=33
let stringnum=String(somenum)
console.log(typeof stringnum)
console.log(stringnum)

//******Operations******//
let value=3
let negval=-value
console.log(negval)

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2/2)
//console.log(2%2)

let str1="hello"
let str2="saumya ji"
let str3=str1+str2
console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log((3+4)*5%3)
console.log(true)
console.log(+true)
console.log(+"")

let gamecounter=100
let post=gamecounter++
let pre=++gamecounter
console.log(post)
console.log(pre)
