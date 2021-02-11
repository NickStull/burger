const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burger", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("burger", cols, vals, function(res) {
            cb(res);
          });
    },
    update: function(cols, condition, cb) {
        orm.update("burger", cols, condition, function(res) {
            cb(res);
          });
    }
};

module.exports = burger;