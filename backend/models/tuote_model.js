const db = require('../db');

const tuote = {
    getById: function(id, callback) {
        return db.query('select * from tuote where idTuote=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from tuote', callback);
    }, 
    add: function(tuote, callback) {
        return db.query('insert into tuote (idTuote, Nimi, Kuvaus, Hinta, Kuva, Ravintola_idRavintola) values(?,?,?,?,?,?)',
        [tuote.idTuote, tuote.Nimi, tuote.Kuvaus, tuote.Hinta, tuote.Kuva, tuote.Ravintola_idRavintola], callback);
    },
    delete: function(id, callback){
        return db.query('delete from tuote where idTuote=?',[id], callback);
    },
    update: function(idTuote, tuote, callback){
        return db.query(
            'update tuote set Nimi=?, Kuvaus=?, Hinta=?, Kuva=? where idTuote=?',
            [tuote.Nimi, tuote.Kuvaus, tuote.Hinta, tuote.Kuva, idTuote], callback);
    }
};
module.exports = tuote;