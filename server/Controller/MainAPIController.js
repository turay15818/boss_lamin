const express = require("express");
const dbConnection = require("../DatabaseConfig/DatabaseConfig");

const router = express.Router();

router.post("/datadetails", (req, res) => {
  try {
    const { MSISDN, level, timestamp } = req.body;
    if (typeof MSISDN !== "number" || MSISDN.toString().startsWith("0")) {
      res.status(400).json({ error: "Invalid MSISDN field" });
      return;
    }

    const query =
      "INSERT INTO datadetails (MSISDN, level, timestamp) VALUES (?, ?, ?)";
    const values = [MSISDN, level, timestamp];

    dbConnection.query(query, values, (err, result) => {
      if (err) {
        console.error("Error creating data details:", err);
        res.status(500).json({ error: "Error creating data details" });
        return;
      }

      res.status(201).json({ message: "Data details created successfully" });
    });
  } catch (err) {
    console.error("Error creating data details:", err);
    res.status(500).json({ error: "Error creating data details" });
  }
});

// API endpoint to get all data details
router.get("/datadetails", (req, res) => {
  try {
    // Perform the query to fetch all data details
    const query = "SELECT * FROM datadetails";

    dbConnection.query(query, (err, results) => {
      if (err) {
        console.error("Error retrieving data details:", err);
        res.status(500).json({ error: "Error retrieving data details" });
        return;
      }

      res.status(200).json(results);
    });
  } catch (err) {
    console.error("Error retrieving data details:", err);
    res.status(500).json({ error: "Error retrieving data details" });
  }
});

// API endpoint to get data details by ID
router.get("/datadetails/:id", (req, res) => {
  try {
    const { id } = req.params;

    // Perform the query to fetch data details by ID
    const query = "SELECT * FROM datadetails WHERE id = ?";

    dbConnection.query(query, [id], (err, results) => {
      if (err) {
        console.error("Error retrieving data details:", err);
        res.status(500).json({ error: "Error retrieving data details" });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ error: "Data details not found" });
        return;
      }

      res.status(200).json(results[0]);
    });
  } catch (err) {
    console.error("Error retrieving data details:", err);
    res.status(500).json({ error: "Error retrieving data details" });
  }
});

// API endpoint to update data details by ID
router.patch("/datadetails/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { MSISDN, level, timestamp } = req.body;

    // Validate MSISDN field
    if (typeof MSISDN !== "number" || MSISDN.toString().startsWith("0")) {
      res.status(400).json({ error: "Invalid MSISDN field" });
      return;
    }

    // Perform the query to update data details
    const query =
      "UPDATE datadetails SET MSISDN = ?, level = ?, timestamp = ? WHERE id = ?";
    const values = [MSISDN, level, timestamp, id];

    dbConnection.query(query, values, (err, result) => {
      if (err) {
        console.error("Error updating data details:", err);
        res.status(500).json({ error: "Error updating data details" });
        return;
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ error: "Data details not found" });
        return;
      }

      res.status(200).json({ message: "Data details updated successfully" });
    });
  } catch (err) {
    console.error("Error updating data details:", err);
    res.status(500).json({ error: "Error updating data details" });
  }
});

module.exports = router;
