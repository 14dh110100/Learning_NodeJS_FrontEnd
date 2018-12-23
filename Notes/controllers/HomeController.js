var mysql = require('mysql');
var fs = require('fs');
let ejs = require('ejs');

const getIndexView = function(req, res) {
  var user = getUsers._results[0];
  res.render('index', {user: user[0]});
  return res;
};
exports.getIndexView = getIndexView;

const getNewpageView = function(req, res) {
  res.sendFile('newpage.html', {root: 'views'});
  return res;
};
exports.getNewpageView = getNewpageView;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a10031994",
  database: "mytestdb"
});

var getUsers = con.query("select * from App_User", function(err, result, fields) {
  if (err) {
    throw err;
  };
});
