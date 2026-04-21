const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Set language
app.get('/set-language/:lang', (req, res) => {
    res.cookie('lang', req.params.lang, {
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    res.send("Language updated");
});

// Middleware to read language
app.use((req, res, next) => {
    req.language = req.cookies.lang || 'en';
    next();
});

// Example route
app.get('/', (req, res) => {
    res.send(`Language: ${req.language}`);
});