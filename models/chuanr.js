// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var chuanr = {
  all: function(cb) {
    orm.all("chuanr", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("chuanr", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("chuanr", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("chuanr", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (chuanrController.js).
module.exports = chuanr;
