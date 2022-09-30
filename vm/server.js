const express = require("express");

const port = process.env.PORT || 8080;

const app = express();

let count = 0;

app.get('/', (req, res) => {
  res.send('Hello Innovation Lab. ' + ++count);
});

app.listen(port, () => {
  console.log(`Server started, listening on port ${port}`);
});