const myarray=[1,2,3,"saumya"]
//Array are resisable and contain mix of datatypes in js
console.log(myarray[0])
//array copy operation make shallow copy(refernce)

const myheroes=["spiderman","shaktiman"]

const array2=new Array(1,2,3,4,5)
console.log(array2[1])

array2.push(6)//add
array2.push(7)
array2.pop()//remove

array2.shift()//remove from start
array2.unshift(9)//insert at start

console.log(array2.includes(9))//T/F at present or not
console.log(array2.indexOf(3))//where its present,if not -1

const newarray=array2.join()//binds also & make it in string also

console.log(array2)
console.log(newarray)
console.log(typeof newarray)

///slice, splice

console.log("A",array2)

const myarr=array2.slice(1,3)
console.log(myarr)
console.log("B",array2)

const myarr1=array2.splice(1,3)
console.log(myarr1)
console.log("C",array2)

//So, we get difference as 
//In slice range is(start,end-1) & doesn't change original array
//In splice range is(start,end) & it Changes original array

const marvelheroes=["thor","ironman","spiderman"]
const dcheroes=["superman","flash","batman"]
//
//marvelheroes.push(dcheroes)//add the array within
//const st=marvelheroes.concat(dcheroes)//adds but donot modify original
//console.log(marvelheroes)
//console.log(st)

const allheroes=[...marvelheroes,...dcheroes]
console.log(allheroes)

const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarr=anotherarr.flat(Infinity)//we give until how many sub like here we write till infinity 
console.log(realarr)


console.log(Array.isArray("saumya"))
console.log(Array.from("saumya"))
console.log(Array.from({name:"saumya"}))//Interesting..when he didn't get it returns empty

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))

