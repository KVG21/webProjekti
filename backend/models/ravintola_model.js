const db = require('../db');

const ravintola = {
    getById: function(id, callback) {
        return db.query('select * from ravintola where idRavintola=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from ravintola', callback);
    }, 
    add: function(ravintola, callback) {
        return db.query('insert into ravintola (nimi, osoite, aukiolo, kuva, tyyppi, hintataso, arviointi, asiakasID) values(?,?,?,?,?,?,?,?)',
        [ravintola.nimi, ravintola.osoite, ravintola.aukiolo, ravintola.kuva, ravintola.tyyppi, ravintola.hintataso, ravintola.arviointi,ravintola.asiakasID], callback);
    },
    delete: function(id, callback){
        return db.query('delete from ravintola where idRavintola=?',[id], callback);
    },
    update: function(idRavintola, ravintola, callback){
        return db.query(
            'update ravintola set nimi=?, osoite=?, aukiolo=?, kuva=?, tyyppi=?, hintataso=?, arviointi=?, asiakasID=? where idRavintola=?',
            [ravintola.nimi, ravintola.osoite, ravintola.aukiolo, ravintola.kuva, ravintola.tyyppi, ravintola.hintataso, ravintola.arviointi,ravintola.asiakasID, idRavintola], callback);
    }
};
module.exports = ravintola;