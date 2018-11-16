var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));

var port = app.get('port');

app.get('/index', (req, res) => res.send('<h1>Hello World</h1>'));

app.listen(app.get('port'), () => console.log(`Example app listening on port ${port}!`));