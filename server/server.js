const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const bodyParser = require('body-parser');
const todos = require('./todos.json');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
