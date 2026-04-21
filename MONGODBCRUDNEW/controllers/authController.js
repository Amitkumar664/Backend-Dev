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
};
//email,password=req.body





//find email in db
//check password using bycrypt.compare
//if password is correct then create a token using jwt.sign
//send token in cookies toclient

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 3. Create JWT token
    const token = jwt.sign(
      { id: user._id },
      "abcdef", // better: process.env.JWT_SECRET
      { expiresIn: "1h" }
    );

    // 4. Send token in cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // production me true karna
      sameSite: "strict"
    });

    // 5. Send response
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });   

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};