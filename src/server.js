const express = require('express');
const multer = require('multer');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// SQLite database setup
const dbPath = path.resolve(__dirname, 'data.db');
const db = new sqlite3.Database(dbPath);

// Creating table for customer data
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    dob TEXT,
    excelFile TEXT
  )`);
});

// Express middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/submit', upload.single('excelFile'), (req, res) => {
  const { firstName, lastName, dob } = req.body;
  const excelFile = req.file.filename;

  // Inserting data into SQLite database
  db.run(`INSERT INTO customers (firstName, lastName, dob, excelFile)
          VALUES (?, ?, ?, ?)`, [firstName, lastName, dob, excelFile], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to submit data');
    }
    res.redirect('/graph.html'); // Redirect to graph page after submission
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




