//<script src="variables.js"></script>
var x=console.log("Enter your year of birth");
let year= Number(x);
//let age=2019-x;
function age(x){
if(age<18){
    console.log("You are a minor.");
}
else if(age>=18 && age<=36){
    console.log("You are a youth.");
}
else{
    console.log("You are an elder.");
}
return 2019-x;
}
console.log(age);