const acctid=15
let acctmail="saumya@gmail.com"
var acctpassword="123" //due to scope problem var is not used nowadays
acctcity="Jammu"
let acctstate;

//acctid=32//not allowed as its constant
acctmail="s@gmail.com"
acctpassword="111"
acctcity="Bombay"
console.log(acctid);
console.table([acctid,acctmail,acctpassword,acctcity,acctstate])