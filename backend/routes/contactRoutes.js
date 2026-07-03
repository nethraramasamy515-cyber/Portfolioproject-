// // // // // const express = require("express");
// // // // // const router = express.Router();

// // // // // // Contact Form Route
// // // // // router.post("/", async (req, res) => {
// // // // //     try {
// // // // //         const { name, email, message } = req.body;

// // // // //         res.status(200).json({
// // // // //             success: true,
// // // // //             message: "Message received successfully",
// // // // //             data: {
// // // // //                 name,
// // // // //                 email,
// // // // //                 message
// // // // //             }
// // // // //         });

// // // // //     } catch (error) {
// // // // //         res.status(500).json({
// // // // //             success: false,
// // // // //             message: error.message
// // // // //         });
// // // // //     }
// // // // // });
// // // // // module.exports = router;

// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const db = require("../db");

// // // // // Contact Form Route
// // // // router.post("/", (req, res) => {

// // // //     const { name, email, message } = req.body;

// // // //     const sql = `
// // // //         INSERT INTO contacts (name, email, message)
// // // //         VALUES (?, ?, ?)
// // // //     `;

// // // //     db.query(sql, [name, email, message], (err, result) => {

// // // //         if (err) {
// // // //             console.error(err);

// // // //             return res.status(500).json({
// // // //                 success: false,
// // // //                 message: "Failed to save message"
// // // //             });
// // // //         }

// // // //         res.json({
// // // //             success: true,
// // // //             message: "Message sent successfully!"
// // // //         });

// // // //     });

// // // // });

// // // // module.exports = router;

// // // router.post("/", (req, res) => {

// // //     console.log("===== CONTACT API HIT =====");
// // //     console.log(req.body);

// // //     const { name, email, message } = req.body;

// // //     const sql = `
// // //         INSERT INTO contacts (name, email,message)
// // //         VALUES (?, ?, ?)
// // //     `;

// // //     db.query(sql, [name, email, message], (err, result) => {

// // //         if (err) {
// // //             console.log(err);
// // //             return res.status(500).json({
// // //                 success: false,
// // //                 message: "Failed to save message"
// // //             });
// // //         }

// // //         console.log("Inserted Successfully:", result);

// // //         res.json({
// // //             success: true,
// // //             message: "Message sent successfully!"
// // //         });
// // //     });
// // // });






// // const express = require("express");
// // const router = express.Router();
// // const db = require("../db");

// // // Contact Form Route
// // router.post("/", (req, res) => {

// //     console.log("===== CONTACT API HIT =====");
// //     console.log(req.body);

// //     const { name, email, message } = req.body;

// //     const sql = `
// //         INSERT INTO contacts (name, email, message)
// //         VALUES (?, ?, ?)
// //     `;

// //     db.query(sql, [name, email, message], (err, result) => {

// //         if (err) {
// //             console.log("MySQL Error:", err);

// //             return res.status(500).json({
// //                 success: false,
// //                 message: "Failed to save message"
// //             });
// //         }

// //         console.log("Inserted Successfully:", result);

// //         res.json({
// //             success: true,
// //             message: "Message sent successfully!"
// //         });

// //     });

// // });

// // module.exports = router;


// const express = require("express");
// const router = express.Router();

// // ✅ ADD THIS (for browser testing)
// router.get("/", (req, res) => {
//   res.send("Contacts API is working 🚀");
// });

// // your POST API (already there)
// router.post("/", (req, res) => {
//   const { name, email, message } = req.body;

//   const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

//   db.query(sql, [name, email, message], (err, result) => {
//     if (err) {
//       return res.status(500).json(err);
//     }

//     res.send("Inserted Successfully");
//   });
// });

// module.exports = router;
console.log("✅ contactRoutes.js loaded");

const express = require("express");
const router = express.Router();
const db = require("../db");

// Test route for browser
router.get("/", (req, res) => {
  res.send("Contacts API is working 🚀");
});

// Contact form route
router.post("/", (req, res) => { 
  console.log("CONTACT POST ROUTE HIT");

  
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("MySQL Error:", err);
      return res.status(500).json({
        success: false,
        message: "Failed to save message",
      });
    }

    console.log("Inserted Successfully:", result);

    res.json({
      success: true,
      message: "Message sent successfully!",
    });
  });
});

module.exports = router;