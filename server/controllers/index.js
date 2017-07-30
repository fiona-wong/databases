var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        statusCode = 200;
        res.writeHead(statusCode, headers);
        res.end(JSON.stringify({results: data}));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {      
      models.messages.post(req.body, function(results) {
        console.log(req.body);
        res.status(201).send(results);
        //res.end(JSON.stringify(results));
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

