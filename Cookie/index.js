import bcrypt from 'bcryptjs';

const salt=bcrypt.genSaltSync(10);
console.log(salt);
const hashPassword=await bcrypt.hash("123456",salt);
console.log(hashPassword);
const valid=bcrypt.compareSync("123456",hashPassword);
console.log(valid);
