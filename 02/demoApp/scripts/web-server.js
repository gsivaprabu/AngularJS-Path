var express = require('express');
var path = require('path');
var events = require('./eventsController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
console.log('--------------------------')
console.log('rootPath', rootPath);
console.log('--------------------------')

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log('');
console.log('Project Root Path', rootPath);
console.log('');

app.use(express.static(rootPath + '/app'));

app.get('data/event/:id', events.get);
app.post('data/event/:id', events.save);

app.listen(8000);

console.log('Listening on port ' + 8000 + '...');
console.log('');
console.log('');
console.log('Now try to open http://localhost:8000/EventDetails.html');
