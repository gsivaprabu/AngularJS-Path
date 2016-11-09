var fs = require('fs');

module.exports.get = function(req, res) {
    var event = fs.readFileSync('app/data/event/' + req.param.id + '.json', 'utf8');
    req.setHeader('Content-Type:', 'application/json');
    req.send(event);
};

module.exports.save = function(req, res) {
    var event = req.body;
    fs.writeFileSync('app/data/event' + req.param.id + '.json', JSON.stringify(event));
    req.send(event);
}
