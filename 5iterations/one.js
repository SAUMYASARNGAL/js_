//for

/*
for (let index= 0; index <=10; index++) {
    const element = index;
    console.log(element)  
}

for (let i = 0; i < 5; i++) {
    console.log(`outer loop value ${i}`)
   for (let index = 0; index < 5; index++) {
    console.log(`inner value is ${index}`)
   }   
}
*/
 //out of bound gives undefined

 //break and continue

 for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`Detected 5`)
        break
    }
    console.log(`Value of i is ${index}`)  
 }
 //break gets out of the loop

 for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`Detected 5`)
        constinue
    }
    console.log(`Value of i is ${index}`)  
 }
 //continue--one loop is neglected