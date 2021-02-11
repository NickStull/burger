const connection = require("../config/connection.js");

const orm = {
    all: function(tableInput, cb) {
        let queryString = `SELECT * FROM ??;`

        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        let queryString = `INSERT INTO ?? (??) VALUES (?);`

        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    update: function(table, cols, condition, cb) {
        let queryString = `UPDATE ?? SET ?? = true WHERE ${condition};`

        connection.query(queryString, [table, cols], function(err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    }
};

module.exports = orm;