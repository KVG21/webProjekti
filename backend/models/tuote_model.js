const db = require('../db');

const tuote = {
    getById: function(id, callback) {
        return db.query('select * from tuote where ravintolaID=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from tuote', callback);
    }, 
    add: function(tuote, callback) {
        return db.query('insert into tuote (kategoria, nimi, kuvaus, hinta, kuva, ravintolaID) values(?,?,?,?,?,?)',
        [tuote.kategoria, tuote.nimi, tuote.kuvaus, tuote.hinta, tuote.kuva, tuote.ravintolaID], callback);
    },
    delete: function(id, callback){
        return db.query('delete from tuote where idTuote=?',[id], callback);
    },
    update: function(idTuote, tuote, callback){
        return db.query(
            'update tuote set kategoria=?, nimi=?, kuvaus=?, hinta=?, kuva=? where idTuote=?',
            [tuote.kategoria, tuote.nimi, tuote.kuvaus, tuote.hinta, tuote.kuva, idTuote], callback);
    }
};
module.exports = tuote;