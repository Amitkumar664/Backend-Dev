import express from 'express';
const router=express.Router();
router.get("/signUp",(req,res)=>{
    res.send("sign up route")
});

router.get("/signIn",(req,res)=>{
    res.send("sign in route")
});
export default router;