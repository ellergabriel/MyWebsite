const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.use('/', function(req,res){
	console.log(`Request received at ${new Date()}`);
	var fileName = req.url || "index.html";
	var ext = path.extname(fileName)
    res.sendFile(path.join(__dirname+ '/express/' + fileName));
    //__dirname : It will resolve to your project folder.
  });
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);