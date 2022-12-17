const express = require("express");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'public');

app.get('/:name/:email', (req, res) => {
  res.render('index', req.params) 
})
app.get('/:name', (req, res) => {
  res.render('index', {name: req.params.name, email: "unspecified"})
})

app.listen(3000);