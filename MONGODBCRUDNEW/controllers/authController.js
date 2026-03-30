// import user from "../model/UserSchema.js";
// import bcrypt from "bcrypt";

// export const signup = async(req, res)=>{


//     try {
//         const {name,email,password} = req.body;

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = await user.create({
//             name,
//             email,
//             password:hashedPassword,
//         });

//         res.status(200).json({
//             message: "user is created",
//             newUser,
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "internal server error",
//             error:error.message
//         });
//     }
// }


import user from "../model/userSchema.js";
import bcrypt from "bcrypt";

export const signup = async(req, res)=>{


    try {
        const {name,email,password} = req.body;

        

        const newUser = await user.create({
            name,
            email,
            password:hashedPassword,
        });

        res.status(200).json({
            message: "user is created",
            newUser,
        });
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error:error.message
        });
    }
}