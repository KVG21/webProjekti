const db = require('../db');

const tuote = {
    getById: function(id, callback) {
        return db.query('select * from tuote where idTuote=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from tuote', callback);
    }, 
    add: function(tuote, callback) {
        return db.query('insert into tuote (nimi, kuvaus, hinta, kuva, Ravintola_idRavintola) values(?,?,?,?,?)',
        [tuote.nimi, tuote.kuvaus, tuote.hinta, tuote.kuva, tuote.Ravintola_idRavintola], callback);
    },
    delete: function(id, callback){
        return db.query('delete from tuote where idTuote=?',[id], callback);
    },
    update: function(idTuote, tuote, callback){
        return db.query(
            'update tuote set nimi=?, kuvaus=?, hinta=?, kuva=? where idTuote=?',
            [tuote.nimi, tuote.kuvaus, tuote.hinta, tuote.kuva, idTuote], callback);
    }
};
module.exports = tuote;