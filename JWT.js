const jwt = require('jsonwebtoken');

const ACCESS_SECRET = 'access-secret';
const REFRESH_SECRET = 'refresh-secret';

const refreshTokens = new Set();

// Generate tokens
function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_SECRET, { expiresIn: '15m' });
}

function generateRefreshToken(user) {
    const token = jwt.sign(user, REFRESH_SECRET, { expiresIn: '7d' });
    refreshTokens.add(token);
    return token;
}

// Login
app.post('/login', (req, res) => {
    const user = { id: 1, username: "test" }; // dummy

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.json({ accessToken, refreshToken });
});

// Refresh
app.post('/token/refresh', (req, res) => {
    const { token } = req.body;

    if (!refreshTokens.has(token)) return res.sendStatus(403);

    jwt.verify(token, REFRESH_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        const accessToken = generateAccessToken({ id: user.id });
        res.json({ accessToken });
    });
});

// Logout
app.post('/logout', (req, res) => {
    refreshTokens.delete(req.body.token);
    res.sendStatus(204);
});

// Protected route
app.get('/protected', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, ACCESS_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        res.json({ message: "Protected data", user });
    });
});