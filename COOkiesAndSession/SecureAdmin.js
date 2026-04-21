const users = [
    { id: 1, username: "admin", role: "admin" },
    { id: 2, username: "user", role: "user" }
];

// Login
app.post('/login', (req, res) => {
    const user = users.find(u => u.username === req.body.username);

    if (!user) return res.status(401).send("Invalid");

    req.session.user = user;
    res.send("Logged in");
});

// Auth middleware
const isAuth = (req, res, next) => {
    if (!req.session.user) return res.status(401).send("Login required");
    next();
};

// Admin check
const isAdmin = (req, res, next) => {
    if (req.session.user.role !== 'admin') {
        return res.status(403).send("Admin only");
    }
    next();
};

// Admin panel
app.get('/admin', isAuth, isAdmin, (req, res) => {
    res.send("Welcome Admin Panel");
});