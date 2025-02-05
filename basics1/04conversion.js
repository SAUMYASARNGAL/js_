//console.log(2>1)
//console.log(2>=1)
//console.log(2!=1)

console.log("2">1)
console.log("02">1)
console.log("1">8)

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
/*reason is == and comparison work differently,comparison convert null
to Number(0)*/

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined>=0)//false


console.log("2"==2)//true
console.log("2"===2)//false

