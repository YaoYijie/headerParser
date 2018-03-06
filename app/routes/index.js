var HeaderHandler = require(process.cwd() + '/app/controllers/headerHandler.server.js');

module.exports = function(app) {
  var headerHandler = new HeaderHandler();
  app.get('/api/whoami/', headerHandler.headerParser);
}
