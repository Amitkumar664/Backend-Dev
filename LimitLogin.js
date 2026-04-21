const loginAttempts = new Map();

function checkLoginAttempts(email) {
    const data = loginAttempts.get(email);

    if (!data) return null;

    if (data.lockUntil && Date.now() < data.lockUntil) {
        return "Account locked. Try later.";
    }

    if (data.count >= 5) {
        data.lockUntil = Date.now() + 30 * 60 * 1000; // 30 min
        return "Too many attempts. Account locked.";
    }

    return null;
}

function recordFailedAttempt(email) {
    const data = loginAttempts.get(email) || { count: 0 };

    data.count += 1;
    loginAttempts.set(email, data);
}

function clearAttempts(email) {
    loginAttempts.delete(email);
}

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const error = checkLoginAttempts(email);
    if (error) return res.status(429).json({ message: error });

    const user = users.find(u => u.email === email);
    if (!user) {
        recordFailedAttempt(email);
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        recordFailedAttempt(email);
        return res.status(401).json({ message: "Invalid credentials" });
    }

    clearAttempts(email);
    res.json({ message: "Login successful" });
});