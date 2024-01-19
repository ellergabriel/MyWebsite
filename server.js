const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")));
const server = http.createServer(app);
const port = 3000;
// default URL for website
app.use(function(req,res){
	//console.log(`Request received at ${new Date()}`);
	//var fileName = req.url || "index.html";
	//var ext = path.extname(fileName)
	res.status(404);
   	res.send(`<h1>Error 404: Resource not found</h1>`);
    //__dirname : It will resolve to your project folder.
  });
app.get('/', function(req, res) {
	//res.render('index.html');
});
server.listen(port);
console.debug('Server listening on port ' + port);