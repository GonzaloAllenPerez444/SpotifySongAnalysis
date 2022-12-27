const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(PORT);
console.log("in server.js");
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/public/index.html'))
})