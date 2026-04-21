const session = require('express-session');

app.use(session({
    secret: 'multi-step-secret',
    resave: false,
    saveUninitialized: true
}));

// Step 1
app.post('/step1', (req, res) => {
    req.session.formData = {
        ...req.session.formData,
        name: req.body.name
    };
    res.send("Step 1 saved");
});

// Step 2
app.post('/step2', (req, res) => {
    req.session.formData = {
        ...req.session.formData,
        email: req.body.email
    };
    res.send("Step 2 saved");
});

// Final Step
app.post('/submit', (req, res) => {
    const data = req.session.formData;

    if (!data) return res.status(400).send("No data");

    // Save to DB (simulate)
    console.log("Final Data:", data);

    req.session.destroy();
    res.send("Registration complete");
});