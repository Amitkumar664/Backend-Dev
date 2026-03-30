import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,   // ✅ also fix this (you wrote "require")
        maxLength: [25, "Name must contain 25 char only"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must contain 8 char only"]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
});




userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return ;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
