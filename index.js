const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());

let options = {};
let cn = {
  host: 'localhost',
  port: 5432,
  database: "username",
  user: "username",
  password: "password"
};

const pgp = require('pg-promise')(options);
const db = pgp(cn);
let bookData;
let authorData;

function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let query = "SELECT * FROM books;";
db.query(query)
  .then((data) => {
    bookData = data
    console.log('DATA:', data)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })

app.get('/api/books/author', async (_req, response) => {
  mongoose.connect(MONGODB_URI);
  const authorSchema = new mongoose.Schema({
    id: Number,
    author: String,
  });
  const Author = mongoose.model('Author', authorSchema);
  let authorData = await Author.find({})
  response.json(author);
});

app.get('/api/books', (_req, response) => {
  let idx = generateRandomNumber(0, 6)
  let book = JSON.stringify({ book: bookData[idx]['title'] })
  response.json(book);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`App is up and running on ${PORT}`);
});