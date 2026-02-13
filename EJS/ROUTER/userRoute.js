import express from "express";

export default function (userData) {
  const router = express.Router();


  router.get("/user", (req, res) => {
    res.render("user", { userData });
  });

 
  router.get("/editpage/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = userData.find((ele) => ele.id === id);

    if (!user) {
      return res.send("User not found");
    }

    res.render("edit", { user });
  });


  router.post("/api/user", (req, res) => {
    const { name, age } = req.body;

    const newUser = {
      id: userData.length + 1,
      name,
      age,
    };

    userData.push(newUser);

    res.redirect("/user");
  });

 
  router.delete("/api/user/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = userData.findIndex((ele) => ele.id === id);

    if (index === -1) {
      return res.send("User not found");
    }

    userData.splice(index, 1);

    res.redirect("/user");
  });


  router.put("/api/user/:id", (req, res) => {
    const { name, age } = req.body;
    const id = parseInt(req.params.id);

    const index = userData.findIndex((ele) => ele.id === id);

    if (index === -1) {
      return res.send("User not found");
    }

    userData[index] = { id, name, age };

    res.redirect("/user");
  });

  return router;
}
