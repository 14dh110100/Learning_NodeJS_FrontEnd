var express = require('express');
var app = express();
var HomeController = require('./controllers/HomeController')

app.get('/', HomeController.getIndexView)
app.get('/newpage.html', HomeController.getNewpageView)

app.listen(8888, function() {
  console.log('example app listening on port 8888');
})

app.set('view engine', 'pug')

app.use(express.static(__dirname));
