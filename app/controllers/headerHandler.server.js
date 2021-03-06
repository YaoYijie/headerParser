
function headerHandler() {
  this.headerParser = function(req, res) {
    var localIp = req.get('x-forwarded-for');
    var language = req.get('Accept-Language').split(',')[0];
    var agent = req.get('User-Agent').match(/\(.*?\)/g)[0].slice(1, -1);
    console.log(localIp);

    var outObj = {
      ipaddress: localIp,
      language: language,
      software: agent
    }
    res.json(outObj);
  }
}

module.exports = headerHandler;
