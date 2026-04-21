const jwt = require('jsonwebtoken');

const ACCESS_SECRET = 'access-secret';

// Example OTP store (use Redis/DB in real apps)
const otpStore = new Map(); // userId -> otp

const verifyMFA = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    const { otp } = req.body;

    if (!token) return res.status(401).json({ message: "Token required" });

    jwt.verify(token, ACCESS_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });

        const validOtp = otpStore.get(user.id);

        if (!otp || otp !== validOtp) {
            return res.status(403).json({ message: "Invalid OTP" });
        }

        next();
    });
};

// Protected sensitive route
app.post('/transfer-money', verifyMFA, (req, res) => {
    res.json({ message: "Transaction successful" });
});