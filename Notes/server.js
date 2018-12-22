
var http = require("http"),
    mysql = require('mysql'),
    fs = require('fs'),
    finalhandler = require('finalhandler'),
    Router = require('router'),
    router = Router();

fs.readFile('./index.html', function(err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    loadFile(request, response);
    response.write(html);
    response.end();
  }).listen(8888);
});

router.get('/', function (req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'});
    const page = fs.readFile('./index.html');
    res.write(page);
    res.end();
});

var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
});

server.listen(8888);

const loadFile = function (req, res) {
    if (req.url.indexOf('css') !== -1) {
        res.writeHead(200, {'Content-type' : 'text/css'});
        const css = fs.readFileSync(__dirname + req.url, 'utf8');
        res.write(css);
    };
    if (req.url.indexOf('jpg') !== -1) {
        res.writeHead(200, {'Content-type' : 'image/jpg'});
        const image = fs.readFileSync(__dirname + req.url);
        res.write(image);
    }
};

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a10031994"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
