const db = require('../db');

const ravintola = {
    getById: function(id, callback) {
        return db.query('select * from ravintola where idRavintola=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from ravintola', callback);
    }, 
    add: function(ravintola, callback) {
        return db.query('insert into ravintola (idRavintola, Nimi, Osoite, Aukiolo, Kuva, Tyyppi, Hintataso, Arviointi) values(?,?,?,?,?,?,?,?)',
        [ravintola.idRavintola, ravintola.Nimi, ravintola.Osoite, ravintola.Aukiolo, ravintola.Kuva, ravintola.Tyyppi, ravintola.Hintataso, ravintola.Arviointi], callback);
    },
    delete: function(id, callback){
        return db.query('delete from ravintola where idRavintola=?',[id], callback);
    },
    update: function(idRavintola, ravintola, callback){
        return db.query(
            'update ravintola set Nimi=?, Osoite=?, Aukiolo=?, Kuva=?, Tyyppi=?, Hintataso=?, Arviointi=? where idRavintola=?',
            [ravintola.Nimi, ravintola.Osoite, ravintola.Aukiolo, ravintola.Kuva, ravintola.Tyyppi, ravintola.Hintataso, ravintola.Arviointi, idRavintola], callback);
    }
};
module.exports = ravintola;