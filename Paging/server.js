const express = require('express');
const app = express();
const port = 3000;

const { userData } = require('./data');

app.get("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let user = userData.find((ele) => ele.id === id)
    res.json(user);
});

//query parameter is used in paging in real life applications


app.get('/user/profile', (req, res) => {
    res.send('User Profile Page');
});

app.get('/user/settings', (req, res) => {
    res.send('User Settings Page');
});

//http://localhost:3000/user/page?page=1&limit=5
app.get('/user/page', (req, res) => {
    // res.send('User Page');
    // let name = req.query.name;
    // let size = req.query.size;
    // console.log(name,size);
    // res.json({ name: size });

    // const page = req.query.name;
    // const  limit = req.query.size;
    // res.json({
    //     pagesize,
    //     limit
    // })
    const page = req.query.page;
    const limit = req.query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const pagedata = data.slice(startIndex, endIndex);
    res.json(pagedata);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
