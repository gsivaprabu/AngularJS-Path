var express = require('express');
console.log('express', express);
var path = require('path');
console.log('path', path);
var events = require('./eventsController');
console.log('events', events);
var app = express();
console.log('app', app);
var rootPath = path.normalize(__dirname + '/../');
console.log('rootPath', rootPath);
var bodyParser = require('body-parser');
console.log('bodyParser', bodyParser);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event/:id', events.save);
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });

app.listen(8000);
console.log('Listening on port ' + 8000 + '...');
console.log('');
console.log('http://localhost:8000');