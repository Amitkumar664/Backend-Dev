import express from 'express';
const router = express.Router();
let loginvalidatiion = (req, res, next) => {
    const token= req.query.token;
    if (token === "admin123") {
        next(); 
    } else {
        res.send("access is denied");
    }
};
// router.use(loginvalidatiion)
router.get("/login", loginvalidatiion,(req, res) => {
    res.send("sign up route")
});

router.get("/signIn", (req, res) => {
    res.send("sign in route")
});
export default router;