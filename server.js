var express = require('express');
var path = require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var data = require('./data/bird.json')


var app = express();

app.set('js', path.join(__dirname, 'js'));
app.engine('html',ejs.renderFile);
app.set('view engine','html');
app.use(express.static(path.join(__dirname)));

app.get('/api',function(req,res) {
	res.send(data);
})

app.listen(2000,function(){
	console.log('server running');
});