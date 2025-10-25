import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// POST route to save profile
app.post("/api/profile", (req, res) => {
  const { year_of_birth, month_of_birth, day_of_birth, gender, city } = req.body;

  const sql = `
    INSERT INTO profiles (year_of_birth, month_of_birth, day_of_birth, gender, city)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [year_of_birth, month_of_birth, day_of_birth, gender, city], (err, result) => {
    if (err) {
      console.error("❌ Failed to insert profile:", err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "✅ Profile saved successfully!", id: result.insertId });
  });
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
