const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all skills
router.get("/", (req, res) => {
  db.query("SELECT * FROM skills", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
});

// Add a new skill
router.post("/", (req, res) => {
  const { skill_name, skill_level } = req.body;

  const sql = "INSERT INTO skills (skill_name, skill_level) VALUES (?, ?)";

  db.query(sql, [skill_name, skill_level], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "Skill added successfully",
      id: result.insertId,
    });
  });
});

module.exports = router;