const db = require('../db');
const bcrypt = require('bcryptjs');
const ravintoloitsija = {
    getById: function(id, callback) {
        return db.query('select * from ravintoloitsija where idRavintoloitsija=?',[id], callback);
    },
    getAll: function(callback) {
        return db.query('select * from ravintoloitsija', callback);
    }, 
    add: function(ravintoloitsija, callback) {
        bcrypt.hash(ravintoloitsija.Salasana,10,function(err,hash){
        return db.query('insert into ravintoloitsija (Etunimi, Sukunimi, Puhelinnumero, Ytunnus, Salasana) values(?,?,?,?,?)',
        [ravintoloitsija.Etunimi, ravintoloitsija.Sukunimi, ravintoloitsija.Puhelinnumero, ravintoloitsija.Ytunnus, hash], callback);});  
    },
    delete: function(id, callback){
        return db.query('delete from ravintoloitsija where idravintoloitsija=?',[id], callback);
    },
    update: function(idRavintoloitsija, ravintoloitsija, callback){
        
        bcrypt.hash(ravintoloitsija.Salasana,10,function(err,hash){
        return db.query(
            'update ravintoloitsija set Etunimi=?, Sukunimi=?, Puhelinnumero=?, Ytunnus=?, Salasana=? where idRavintoloitsija=?',
            [ravintoloitsija.Etunimi, ravintoloitsija.Sukunimi, ravintoloitsija.Puhelinnumero, ravintoloitsija.Ytunnus, ravintoloitsija.Salasana, idRavintoloitsija], callback);});
    }
};
module.exports = ravintoloitsija;