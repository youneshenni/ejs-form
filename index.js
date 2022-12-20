const bodyParser = require("body-parser");
const express = require("express");

const app = express();

let data = [];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', 'public');

app.post('/page1', (req, res) => {
  console.log(req.query)
data.push(req.body);
res.render('page1', {data:data})
})

app.get('/page1', (req, res) => res.render('page1', {data}))
app.listen(3000);