const name="Saumya"
const repocount=1
//console.log(name+" has "+repocount+" repository")
console.log(`${name} has ${repocount} repository`)//bactics-->string interpolation

//string methods
const gamename=new String("saumuuu-sarngal")
console.log(gamename)
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf("s"))
const newstring=gamename.substring(0,4)//(start to end-1)//for negative take from 0
console.log(newstring)
const otherstring=gamename.slice(-3,7)//(start to end-1)in negative it starts from reverse & there index is from -1
console.log(otherstring)

const newstringone ="  saumya  "
console.log(newstringone.trim())

const url="https://saumya123.com"
console.log(url.replace('123','-')) 
console.log(url.includes('saumya'))

console.log(gamename.split('-'))

//see more functions on string
//do practice