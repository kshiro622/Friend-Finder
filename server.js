var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});
