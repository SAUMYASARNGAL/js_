//Imediately Invoked Function Expression(IIFE)
//Due to Gobal scope pollution

(function chai(){
    //named iife
    console.log(`DB connected`)
})();
//; is imp to end code
//two paranthesis one for writing other for execution call

((name)=>{
    console.log(`DB connected to ${name}`)
})('mycompanion');

