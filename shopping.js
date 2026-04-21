const session = require('express-session');

app.use(session({
    secret: 'cart-secret',
    resave: false,
    saveUninitialized: false
}));

// Init Cart
const initCart = (req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
};

app.use(initCart);

// Add item
app.post('/cart/add', (req, res) => {
    const { productId, name, price, quantity } = req.body;

    const item = req.session.cart.find(i => i.productId === productId);

    if (item) {
        item.quantity += quantity;
    } else {
        req.session.cart.push({ productId, name, price, quantity });
    }

    res.json(req.session.cart);
});

// Update quantity
app.put('/cart/update/:productId', (req, res) => {
    const { quantity } = req.body;

    const item = req.session.cart.find(i => i.productId === req.params.productId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.quantity = quantity;
    res.json(req.session.cart);
});

// Remove item
app.delete('/cart/remove/:productId', (req, res) => {
    req.session.cart = req.session.cart.filter(i => i.productId !== req.params.productId);
    res.json(req.session.cart);
});

// View cart + total
app.get('/cart', (req, res) => {
    const total = req.session.cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    res.json({ cart: req.session.cart, total });
});