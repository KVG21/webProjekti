const db = require('../db');

const historia = {
    getById: function(id, callback) {
        return db.query('select * from tilaushistoria where idTilaushistoria=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from tilaushistoria', callback);
    }, 
    add: function(tilaushistoria, callback) {
        return db.query('insert into tilaushistoria (idTilaushistoria, Tuote_idTuote, Asiakas_idAsiakas, Päivämäärä) values(?,?,?,?)',
        [tilaushistoria.idTilaushistoria, tilaushistoria.Tuote_idTuote, tilaushistoria.Asiakas_idAsiakas, tilaushistoria.Päivämäärä], callback);
    },
    delete: function(id, callback){
        return db.query('delete from tilaushistoria where idTilaushistoria=?',[id], callback);
    }
};
module.exports = historia;