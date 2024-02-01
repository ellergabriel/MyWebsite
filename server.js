//const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.use(express.json());
//app.use(express.static(path.join(__dirname + "/public")));
app.use(express.static(path.join(__dirname + '/views')));
//const server = http.createServer(app);
//const port = 3000;
// default URL for website
//app.use(function(req,res){
	//console.log(`Request received at ${new Date()}`);
	//var fileName = req.url || "index.html";
	//var ext = path.extname(fileName)
	//res.status(404);
   	//res.send(`<h1>Error 404: Resource not found</h1>`);
    //__dirname : It will resolve to your project folder.
  //});
app.get('/', function(req, res) {
	res.render(path.join(__dirname, '/views/pages/index'));
});
app.get('/test', function(req, res) {
	res.render("test");
});
//server.listen(port, function() {
	//console.log("Server is running on port " + port);
//});
//console.debug('Server listening on port ' + port);
app.listen(8080);
console.log('Server is doing ejs stuff');