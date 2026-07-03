const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all projects
router.get("/", (req, res) => {
    db.query("SELECT * FROM projects", (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
});

// Add a new project
router.post("/", (req, res) => {
    const {
        title,
        description,
        techStack,
        githubLink,
        liveDemo,
        imageUrl
    } = req.body;

    const sql = `
        INSERT INTO projects
        (title, description, techStack, githubLink, liveDemo, imageUrl)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [title, description, techStack, githubLink, liveDemo, imageUrl],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Project added successfully",
                id: result.insertId
            });
        }
    );
});

module.exports = router;