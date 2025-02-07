//Array specific loop
//for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for(const it of arr){
    console.log(it)
}//for of -->get the values

const greetings="Hello World!"
for(const num of greetings){
    console.log(`Each char is ${num}`)
}

//Maps--object holds value pairs and remembers the original insertion order of keys.UNIQUE
const mapp=new Map()
mapp.set('IN',"India")
mapp.set('USA',"United States of America")
mapp.set('Fr',"France")

console.log(mapp)

for(const [key,value] of mapp){
    console.log(key,':-',value)
}

/*
const myobj={
    'g1':"Bgmi",
    'g2':"valorant"
}
for(const[key,valu] of myobj){
    console.log(key,":-",valu)
}
    Object is not iterable like this
*/
