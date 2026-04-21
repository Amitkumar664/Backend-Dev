const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 min
const WARNING_TIME = 1 * 60 * 1000; // 1 min before expiry

// Middleware to track activity
app.use((req, res, next) => {
    req.session.lastActivity = Date.now();
    next();
});

// Check session expiry
app.get('/check-session', (req, res) => {
    const last = req.session.lastActivity;

    if (!last) return res.json({ expired: true });

    const remaining = SESSION_TIMEOUT - (Date.now() - last);

    if (remaining <= 0) {
        req.session.destroy();
        return res.json({ expired: true });
    }

    if (remaining <= WARNING_TIME) {
        return res.json({ warning: true, remaining });
    }

    res.json({ active: true, remaining });
});