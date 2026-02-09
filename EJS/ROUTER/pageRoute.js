import express from 'express';

const router=express.Router();

const app = express();



// render index page
router.get("/", (req, res) => {
    res.render("index");
});

//render edit page
// app.get("/editpage/:id", (req, res) => {
//     const id = req.params.id;

//     const user = userData.find((ele) => ele.id == id);
//     console.log(user)

//     res.render("edit", { userData: [user] })
// })
router.get("/editpage/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = userData.find((ele) => ele.id === id);

  if (!user) {
    return res.send("User not found");
  }

  res.render("edit", { user });   
});


// get user
router.get("/user", (req, res) => {
    res.render("user", { userData });
});

// add user
router.post("/api/user", (req, res) => {

    const { name, age } = req.body;

    let newUserData = {
        id: userData.length + 1,
        name,
        age
    }
    userData.push(newUserData);
    res.redirect('/user')

})

//delete user
router.delete("/api/user/:id", (req, res) => {

    const userid = (req.params.id);

    const useridx = userData.findIndex((ele) => ele.id == userid);

    if (useridx == -1) {
        return res.send("user not found")
    }

    userData.splice(useridx, 1);

    res.redirect("/user")

})

router.put("/api/user/:id", (req, res) => {
    const { name, age } = req.body;

    const id = parseInt(req.params.id);   // FIXED

    const userIdx = userData.findIndex((ele) => ele.id === id);

    if (userIdx === -1) {                 // FIXED
        return res.send("User not found");
    }

    userData[userIdx] = {                 // FIXED
        id,
        name,
        age
    };

    res.redirect("/user");
});


export default router;

// staic server
//csr
//ssr
// template engine
// ejs, pug, hbs
//seo friendly