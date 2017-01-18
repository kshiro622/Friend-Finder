// Dependencies
var express = require('express');
var path = require('path');
// Set up express
var app = express();
var PORT = 3000;
// routes
var htmlRoutes = require('./app/routing/htmlRoutes')(app);
var apiRoutes = require('./app/routing/apiRoutes')(app);
//listen
app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});
