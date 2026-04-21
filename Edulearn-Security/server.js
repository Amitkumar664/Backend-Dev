const helmet = require("helmet");

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      mediaSrc: ["https://s3.amazonaws.com"],
      scriptSrc: ["'self'"],
      connectSrc: ["https://api.stripe.com"]
    }
  }
}));