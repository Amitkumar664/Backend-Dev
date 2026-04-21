const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

// Local Strategy
passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(u => u.username === username);
    if (!user) return done(null, false);

    if (user.password !== password) return done(null, false);

    return done(null, user);
}));

// JWT Strategy
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}, (payload, done) => {
    const user = users.find(u => u.id === payload.id);
    return user ? done(null, user) : done(null, false);
}));

// Login (session)
app.post('/auth/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: "Logged in" });
});

// API Login (JWT)
app.post('/auth/api-login', (req, res) => {
    const user = { id: 1 };
    const token = jwt.sign(user, 'secret');
    res.json({ token });
});

// Protected routes
app.get('/dashboard', (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    res.send("Dashboard");
});

app.get('/api/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.json(req.user);
    }
);