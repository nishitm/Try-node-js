var express = require('express');
var app = express();
var p = process.env.PORT || 8000;

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/',fun(req,res){
	res.render('index');
	});

app.listen(p,fun(){
	console.log("yoohoo!!! App is Running on port "+p);
	});
	
