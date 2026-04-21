require("dotenv").config();

const express = require("express");
const helmet = require("helmet");

const app = express();


// ✅ 1. Helmet yahan add hoga (TOP pe)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "https://cdn.com"],
        scriptSrc: ["'self'", "https://www.youtube.com"],
        frameSrc: ["https://www.youtube.com"]
      }
    }
  })
);


// ✅ 2. Body parser
app.use(express.json());


// ✅ 3. Routes (Helmet ke baad aayenge)
app.use("/products", require("./routes/products"));
app.use("/reviews", require("./routes/reviews"));


// ✅ 4. Server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});