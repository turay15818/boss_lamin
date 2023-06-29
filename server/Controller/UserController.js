// const express = require("express");
// const bcrypt = require("bcrypt");
// const dbConnection = require("../DatabaseConfig/DatabaseConfig");
// const sshConnection = require("../DatabaseConfig/ssh");

// const router = express.Router();

// router.post("/users", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
//     const values = [name, email, hashedPassword];
//     dbConnection.query(query, values, (err, result) => {
//       if (err) {
//         console.error("Error creating user:", err);
//         res.status(500).json({ error: "Error creating user" });
//         return;
//       }

//       res.status(201).json({ message: "User created successfully" });
//     });
//   } catch (err) {
//     console.error("Error creating user:", err);
//     res.status(500).json({ error: "Error creating user" });
//   }
// });

// module.exports = router;
