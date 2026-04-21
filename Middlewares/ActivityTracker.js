const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    lastLogin: Date,
    lastLogout: Date,
    lastActive: Date
});

// Update lastActive on every save
userSchema.pre('save', function (next) {
    this.lastActive = new Date();
    next();
});

// Custom methods
userSchema.methods.recordLogin = function () {
    this.lastLogin = new Date();
    this.lastActive = new Date();
    return this.save();
};

userSchema.methods.recordLogout = function () {
    this.lastLogout = new Date();
    return this.save();
};

const User = mongoose.model('User', userSchema);