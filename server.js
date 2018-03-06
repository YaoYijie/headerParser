var express = require('express'),
  routes = require('./app/routes/index.js');

var app = express();

routes(app);

app.listen(process.port || '3000', function() {
  console.log('Listening on port 3000...');
})
