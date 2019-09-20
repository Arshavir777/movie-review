var express = require('express');
var app = express();
var path = require('path')


// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('./dist'));
app.set('views', path.join(__dirname, './dist'));



app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen( process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});