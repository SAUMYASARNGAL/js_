//for in loop
const myobject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myobject) {
        console.log(`${key} shortcut is for ${myobject[key]}`)      
}

const programming=["js","cpp","rb","swift"]
/*for (const key in programming) {
    console.log(key)
}//for in-->get keys
*/
for (const key in programming) {
    console.log(programming[key])
}

const mapp=new Map()
mapp.set('IN',"India")
mapp.set('USA',"United States of America")
mapp.set('Fr',"France")

for(const key in mapp){
    console.log(key)
}//for in don't work in map



//for...in works with objects: It iterates over the enumerable properties (keys) of an object. But it doesn't work directly with Map.
//for...of works with iterables: It works with iterable objects like arrays, Map, Set, etc., to iterate over values. However, plain objects are not iterable directly, so for...of doesn't work with them. To iterate over an object's properties, you would need to use Object.keys(), Object.values(), or Object.entries().




