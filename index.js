const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (_req, response) => {
  response.send('<h1>Read books</h1>');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`App is up and running on ${PORT}`);
});