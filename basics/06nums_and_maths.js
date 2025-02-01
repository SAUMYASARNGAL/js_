const balance=new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(1))

const othernum=123.45
console.log(othernum.toPrecision(4))

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))
//hundred.Max_Value , hundred.Min_Value

//+++++++++++++++++++++++++maths+++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.4))
console.log(Math.pow(5))
console.log(Math.min(4,5,6,7,1))

console.log(Math.random())//range is 0 to 1
console.log((Math.random()*10)+1)//so 1 to 10
console.log(Math.floor(random()*10)+1)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))