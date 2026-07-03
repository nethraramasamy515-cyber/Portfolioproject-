require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");
  


db.query("SELECT DATABASE() AS db", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected Database:", result[0].db);
  }
});

// Import Routes
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend is Running");
});

// Test MySQL Connection
app.get("/test-db", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "✅ MySQL Connected Successfully",
      data: results,
    });
  });
});

// API Routes
console.log("Project Route:", typeof projectRoutes);
console.log("Skill Route:", typeof skillRoutes);
console.log("Contact Route:", typeof contactRoutes);

app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/contacts", contactRoutes);

// // API Routes
// app.use("/api/projects", projectRoutes);
// app.use("/api/skills", skillRoutes);
// app.use("/api/contacts", contactRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
}); 
