const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./Routes/User");

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, headers, etc.)
}));

// Connect to the database
const db = require("./config/database");
db.connect();

// Mount API routes
app.use("/api/v1/auth", userRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});

// Basic route for testing
app.get("/", (req, res) => {
    res.send("<h1>HELLO HI BYE BYE</h1>");
});
