var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function (error, results, fields) {
        if (error) {
          throw error;
        }
        console.log(results);
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      db.connection.query(`INSERT INTO messages (text, username) VALUES ("${data.text}", "${data.username}");`, function (error, results, fields) {
        if (error) {
          throw error;
        }
        callback(results);
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


