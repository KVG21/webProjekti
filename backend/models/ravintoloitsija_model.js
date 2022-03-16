const db = require('../db');

const ravintoloitsija = {
    getById: function(id, callback) {
        return db.query('select * from ravintoloitsija where idRavintoloitsija=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from ravintoloitsija', callback);
    }, 
    add: function(ravintoloitsija, callback) {
        return db.query('insert into ravintoloitsija (idRavintoloitsija, Etunimi, Sukunimi, Puhelinnumero, Ytunnus, Salasana, Ravintola_idRavintola) values(?,?,?,?,?,?,?)',
        [ravintoloitsija.idRavintoloitsija, ravintoloitsija.Etunimi, ravintoloitsija.Sukunimi, ravintoloitsija.Puhelinnumero, ravintoloitsija.Ytunnus, ravintoloitsija.Salasana, ravintoloitsija.Ravintola_idRavintola], callback);
    },
    delete: function(id, callback){
        return db.query('delete from ravintoloitsija where idravintoloitsija=?',[id], callback);
    },
    update: function(idRavintoloitsija, ravintoloitsija, callback){
        return db.query(
            'update ravintoloitsija set Etunimi=?, Sukunimi=?, Puhelinnumero=?, Ytunnus=?, Salasana=? where idRavintoloitsija=?',
            [ravintoloitsija.Etunimi, ravintoloitsija.Sukunimi, ravintoloitsija.Puhelinnumero, ravintoloitsija.Ytunnus, ravintoloitsija.Salasana, idRavintoloitsija], callback);
    }
};
module.exports = ravintoloitsija;