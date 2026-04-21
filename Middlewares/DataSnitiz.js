const xss = require('xss');

const sanitize = (req, res, next) => {
    const sanitizeObject = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                obj[key] = xss(obj[key]); // prevent XSS
            } else if (typeof obj[key] === 'object') {
                sanitizeObject(obj[key]);
            }
        }
    };

    sanitizeObject(req.body);
    sanitizeObject(req.query);
    sanitizeObject(req.params);

    next();
};

app.use(sanitize);