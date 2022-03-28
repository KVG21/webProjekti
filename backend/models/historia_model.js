const db = require('../db');

const historia = {
    getById: function(id, callback) {
        return db.query('select * from tilaushistoria where asiakasID=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from tilaushistoria', callback);
    }, 
    add: function(tilaushistoria, callback) {
        return db.query('insert into tilaushistoria (pvm, tuotteet ,summa, maara, asiakasID) values(?,?,?,?,?)',
        [tilaushistoria.pvm, tilaushistoria.tuotteet, tilaushistoria.summa, tilaushistoria.maara, tilaushistoria.asiakasID], callback);
    },
    delete: function(id, callback){
        return db.query('delete from tilaushistoria where idTilaushistoria=?',[id], callback);
    }
};
module.exports = historia;