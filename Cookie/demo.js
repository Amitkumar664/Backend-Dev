import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from "jsonwebtoken";

// const secret = "mysecretkey";

// // Generate token
// const token = jwt.sign(
//   { userId: 1, email: "amit@gmail.com" },
//   secret,
//   { expiresIn: "1h" }
// );

// console.log(token);

// // Verify token
// const decoded = jwt.verify(token, secret);
// console.log(decoded);


const app = express();

app.use(cookieParser('mu-super-secret-key')); // Use a secret key for signed cookies
app.use(express.json());


app.get('/set-cookie', (req, res) => {

    let user = {
        name: "rohan",
        email: "rohan@example.com"
    }
    const token = jwt.sign(user, 'abcdef', { expiresIn: '1h' });
    console.log(token);





    res.cookie("token", token, { httpOnly: true });
    res.send('Cookie has been set!');
});
//middleware
const authMiddleware = (req, res, next) => {
    // if (!req.cookies.name) {
    //     return res.send('invalid user');
    // }   
    if (!req.cookies.token) {
        return res.send('invalid user');
    }
    next();
};
app.get('/get-cookie', authMiddleware, (req, res) => {
    const token = req.cookies.token;

    const decoded = jwt.verify(token, 'abcdef');
    console.log(decoded);


    const name = req.cookies.name;
    res.send(`Cookie value: ${name}`);
});
app.get('/profile', authMiddleware, (req, res) => {
    const token = req.cookies.token;

    const decoded = jwt.verify(token, 'abcdef');
    console.log(decoded);
    // const name = req.cookies.name;

    res.send(`Welcome to your profile, ${decoded.name}!`);
});
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('name');
    res.send('Cookie has been cleared!');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

