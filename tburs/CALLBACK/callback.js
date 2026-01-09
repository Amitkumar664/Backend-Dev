// callback -a function is passed to another function
// function fun(){
//     console.log("This is a callback function example.");
// }
// const fun=()=>{
//     console.log("This is a callback function example.");
// }
// function save(cb){//high order function
//     console.log("Saving function");
//     cb()
// }
// save(fun);


// let arr=[1,2,3,4,5];
// arr.forEach((element) => {
//     console.log(element);
// });
function login(cb){
    setTimeout(() => {
        console.log("User logged in");
        cb();
    }, 2000);
}   
function userDetails(){
    setTimeout(() => {
        console.log("User details fetched");
    }, 1000);       
}
login(userDetails); 


console.log("End of script");

