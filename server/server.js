const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
