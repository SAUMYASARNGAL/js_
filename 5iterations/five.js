//for each
const coding=["js","c","c++","java","python"]
//coding.forEach( function (item) {
    //console.log(item); })
coding.forEach((item)=>{
    console.log(item);    
})

function printme(item){
    console.log(item)
}
//coding.forEach(printme)//we give reference of object

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);    
})

const code=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"C++",
        languagefilename:"cpp"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]
code.forEach((item)=>{
    console.log(item)
    console.log(item.languagename)
})
