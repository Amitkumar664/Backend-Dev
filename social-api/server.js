require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("./config/session");

const app = express();

// ✅ 1. Security middleware (TOP pe)
app.use(helmet());

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));

// ✅ 2. Body parser
app.use(express.json());

// ✅ 3. Session
app.use(session);
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
// ✅ 4. Routes
app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));
app.use("/users", require("./routes/users"));
app.use("/messages", require("./routes/messages"));

// ✅ 5. Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});