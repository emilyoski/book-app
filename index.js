const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const pgp = require('pg-promise');
const db = pgp('postgres://username:password@host:port/database');
let bookData;

function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

db.many('SELECT * FROM books;')
  .then((data) => {
    bookData = data.values
    console.log('DATA:', data.values)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })


app.get('/api/books', (_req, response) => {
  let idx = generateRandomNumber(0, 6)
  response.json(bookData[idx]);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`App is up and running on ${PORT}`);
});