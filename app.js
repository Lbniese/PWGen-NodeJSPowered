// import express
const express = require('express');
// instantiate express
const app = express();
// define which port to listen on
const port = process.env.PORT || 8080;
// path
const path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

// listen to a port and start web server
app.listen(port, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Server listening on ${port}!`);
    }
  });