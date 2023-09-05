const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// postgres connection for books by id

app.get('/api/books', (_req, response) => {
  response.send('Harry Potter');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`App is up and running on ${PORT}`);
});