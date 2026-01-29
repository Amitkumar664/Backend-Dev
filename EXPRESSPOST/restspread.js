//rest spread operator
const emp={
    id:1,
    name:"Amit Kumar",
    age:30,
    salary:25000,
    address:"Agra",
    department:"IT"    
}

const empCopy={...emp};//spread operator
console.log(empCopy);

const{id,name,salary,...otherInfo}=emp;//rest operator
console.log(otherInfo);
//update address
const updatedEmp={...emp,address:"Delhi"};//...emp is doing shallow copy of emp object
console.log(updatedEmp);