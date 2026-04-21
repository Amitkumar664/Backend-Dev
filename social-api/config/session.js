const session = require("express-session");
const MongoStore = require("connect-mongo");

module.exports = session({
  secret: "secret123",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DB_URI
  }),
  cookie: {
    httpOnly: true,
    secure: false, // true in production
    maxAge: 1000 * 60 * 60 // 1 hour
  }
});