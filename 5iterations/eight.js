const mynums=[1,2,3]
/*
const mytotal=mynums.reduce(function(acc,currval){
    console.log(`acc ${acc}and currval ${currval}`);
    return acc+currval
},0)
console.log(mytotal)
*/
const mytotal=mynums.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal);

const shoppingcart=[
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"py course",
        price:499
    },
    {
        itemName:"mobile course",
        price:699
    },
    {
        itemName:"data science course",
        price:1099
    },
]
const pricetopay=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay)