const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'awlette5QL173*',
    database: 'inventory_db'
  },
  console.log(`Connected to the inventory_db database.`)
);

// Query database
let deletedRow = 2;

// db.query(`DELETE FROM books WHERE id = ?` (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

db.query(`DELETE FROM books WHERE id = ?`, deletedRow, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });


// app.delete('/api/books/:id', (req, res) => {
//   const sql = `DELETE FROM books WHERE id = 2`;
//   const params = [req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.statusMessage(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'Candidate not found'
//       });
//     } else {
//       res.json({
//         message: 'deleted',
//         changes: result.affectedRows,
//         id: req.params.id
//       });
//     }
//   });
// });

// Query database
db.query('SELECT * FROM books', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

