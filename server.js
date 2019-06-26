const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contact keeper api" })
);

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
