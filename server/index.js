const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./Routes/User");
require('dotenv').config();

// Middleware to parse JSON requests
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));

// Connect to the database
const db = require("./config/database");
db.connect();

// Mount API routes
app.use("/api/v1/auth", userRouter);

// Basic route for testing
app.get("/", (req, res) => {
    res.send("<h1>HELLO HI BYE BYE</h1>");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});
