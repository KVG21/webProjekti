const db = require('../db');

const historia = {
    getById: function(id, callback) {
        return db.query('select * from tilaushistoria where idTilaushistoria=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from tilaushistoria', callback);
    }, 
    add: function(tilaushistoria, callback) {
        return db.query('insert into tilaushistoria (idTilaushistoria, tuote_idtuote, asiakas_idAsiakas, pvm) values(?,?,?,?)',
        [tilaushistoria.idTilaushistoria, tilaushistoria.tuote_idTuote, tilaushistoria.asiakas_idAsiakas, tilaushistoria.pvm], callback);
    },
    delete: function(id, callback){
        return db.query('delete from tilaushistoria where idTilaushistoria=?',[id], callback);
    }
};
module.exports = historia;