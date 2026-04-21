const session = require("express-session");
const MongoStore = require("connect-mongo");

module.exports = session({
  secret: "health-secret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DB_URI
  }),
  cookie: {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 15 // 15 min (strict for healthcare)
  }
});