function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User logged in");
            resolve();
        }, 2000);
    });
}
function userDetails(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User details fetched");
            resolve();
        }, 1000);       
    }); 
}
async function demo(){
   try {
    await login();
    await userDetails();
   } catch (error) {
    console.log("Error:", error);
   }     
    console.log("End of script");
}
demo();