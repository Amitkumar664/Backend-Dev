const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Add to cart (guest or user)
app.post('/cart/add', (req, res) => {
    const item = req.body;

    if (req.session.user) {
        // Logged-in → session
        req.session.cart = req.session.cart || [];
        req.session.cart.push(item);
        return res.json(req.session.cart);
    } else {
        // Guest → cookies
        let cart = JSON.parse(req.cookies.cart || '[]');
        cart.push(item);
        res.cookie('cart', JSON.stringify(cart));
        return res.json(cart);
    }
});

// Login + merge carts
app.post('/login', (req, res) => {
    const user = { id: 1 };
    req.session.user = user;

    const guestCart = JSON.parse(req.cookies.cart || '[]');

    req.session.cart = [
        ...(req.session.cart || []),
        ...guestCart
    ];

    res.clearCookie('cart');

    res.send("Logged in + cart merged");
});

// Get cart
app.get('/cart', (req, res) => {
    if (req.session.user) {
        return res.json(req.session.cart || []);
    } else {
        return res.json(JSON.parse(req.cookies.cart || '[]'));
    }
});