var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
console.log('');
console.log('Project Root Path', rootPath);
console.log('');

app.use(express.static(rootPath + '/app'));

app.listen(8000);

console.log('Listening on port ' + 8000 + '...');
console.log('');
console.log('');
console.log('Now try to open http://localhost:8000/img/angularjs-logo.png');
