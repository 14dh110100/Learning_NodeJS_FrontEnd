var mysql = require('mysql');
var express = require('express');
var app = express();
var replacer = require('replacer');
var HomeController = require('./controllers/HomeController')

app.get('/', HomeController.getIndexView)
app.get('/newpage.html', HomeController.getNewpageView)

app.listen(8888, function() {
  console.log('Notes app listening on port 8888');
})

app.set('view engine', 'ejs');
app.set('json replacer', replacer);
app.set('json spaces', 2);

app.use(express.static(__dirname));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a10031994",
  database: "mytestdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connected!");
});
