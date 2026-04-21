const session = require("express-session");
const MongoStore = require("connect-mongo");

module.exports = session({
  secret: "supersecretkey",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DB_URI
  }),
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 30 // 30 min
  }
});