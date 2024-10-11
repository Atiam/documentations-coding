const express = require('express');
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    // Enter PostgreSQL username
    user: 'tiam',
    // Enter PostgreSQL password
    password: 'tiam',
    host: 'localhost',
    database: 'book_db'
},
console.log('Connected to the courses_db database!')
)

pool.connect();

// Hardcoded query: DELETE FROM course_names WHERE id = 3;
pool.query(`DELETE FROM biographies WHERE id = $1`, [3], (err, {rows}) => {
  if (err) {
    console.log(err);
  }
  console.log(rows);
});

// Query database
pool.query('SELECT * FROM biographies', function (err, {rows}) {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
