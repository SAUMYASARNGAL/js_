// const coding=["js","ruby","java","cpp"]
// const values=coding.forEach((item)=>
// {
//     console.log(item)
//     return item
// })
// console.log(values)


//Filter---we getcall back fucntion and each value is accessed,for values whose condition gets true are returned else not

const nums=[1,2,3,4,5,6,7,8,9,10]
const newnums=nums.filter((nums)=>nums>4)//values satisfying condition will be returned
console.log(newnums);

//const newnums=nums.filter((nums)=>{
//  nums>4 })      //get []

// const newnums=nums.filter((nums)=>{
//  return nums>4})    //values satisfying condition will be returned

//Above can also be written as
const newNums=[]
nums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)

