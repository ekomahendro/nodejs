const express = require('express');
const app = express();
const port = 3500;

app.get('/menu', (req, res) => {
  res.send('Hello World!');
}); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});