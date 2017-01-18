var people = require('../data/friends.js');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
    // Set up express for data parsing
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));

    //
    app.get("/api/friends", function(req, res) {
        res.json(people);
    });

    // Add new entries
    app.post("/api/friends", function(req, res) {
        var newperson = req.body;

        people.push(newperson);

        res.json(newperson);
    });
};
