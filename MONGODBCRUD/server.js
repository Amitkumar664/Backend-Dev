import connectDb from "./db.js";
// import user from "./model/UserSchema.js";
import product from "./model/ProductSchema.js";
connectDb();
// const createUser= async(name,email,password,role)=>{
//     try{
//         const newUser= await user.create({
//             name,
//             email,
//             password,
//             role,
//         // name:"Deepika",
//         // email:"dpka9509@gmail.com",
//         // password:"12345786",
//         // role:"user"
//     });
//     console.log("user is created")
//     }catch(error){
//         console.log("user not created ", error)
//     }
// }

// const readUser=async()=>{
//     const res=await user.find();
//     console.log(res);
// }

// const updateUser=async()=>{
//     const res=await user.updateOne({name:" "},{$set:{name:"Khushboo",role:"admin"}})
// //     await user.findByIdAndUpdate("69bb75ed91fa4219bb50a2fe",{
// //         name:"Janvi",
// //         role:"admin"
// //     },
// //  {new:true,})
// }

// const deleteUser=async()=>{
//     // const res=await user.deleteOne({name:'Dka'});
//     await user.findByIdAndDelete("69bb75e7e63ba28585b412bd");
// }

// // createUser("Dpka","dkaad@gmail.com","12344556","user");
// // readUser();
// updateUser();
// readUser();
// deleteUser();


const findAllProducts=async ()=>{
    try{
        const result = await product.find().populate("userid");
        console.log(result);
        
    }
    catch (error){
        console.log("product not found", error);
    }
};

const createProduct = async()=>{
    try{
        const newProduct= await product.create({
        category:"Accessories",
        specs:{size:32},
        price:40,
        name:"Monitor 8k",
        stock :12,
        tags:["display"],
        userid:"69bb714d90162ff384513962'",
        });
    } catch (error){
        console.log(error)
    }
};

findAllProducts()
createProduct()



const productCount = async () => {
    const result = product.aggregate([
        { $match: { category: "Electronics" } },
        { $count: "total_count" }

    ])
    console.log(result);
}
productCount();

const highValue = async () => {
    const result = product.aggregate([
        { $match: { price: { $gte: 1000 } } },
        { $sort: { price: -1 } },
        { $project: { name: 1, price: 1, _id: 0 } }
    ])
    console.log(result);
}
highValue();


const allCategory = async () => {
    const result = product.aggregate
        ([
            $group:{
                _id:"$category"
            }
        ])
    
    console.log(result);

}
allCategory();