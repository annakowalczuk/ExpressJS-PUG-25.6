var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
  res.render('main');
});

app.get('/auth/google', function(req, res){
  res.render('login');
});

app.post('/userform', function (req, res) {
  // const response = {
  //     username: req.query.username,
  //     password: req.query.password
  // };
  // res.end(JSON.stringify(response));
  var filePath = "assets/cat.jpg"
  var resolvedPath = path.resolve(filePath);
  console.log(resolvedPath);
  res.sendFile(resolvedPath);
});

app.listen(3000, function() {
  console.log('Aplikacja nasłuchuje na http://localhost:3000');
});
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
