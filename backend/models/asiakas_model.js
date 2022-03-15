const db = require('../db');

const asiakas = {
    getById: function (id, callback){
        return db.query('select * from asiakas where idAsiakas=?', [id], callback);
    }, 
    getAll: function (callback){
        return db.query('select * from asiakas', callback);
    }, 
    add: function (asiakas, callback){
        return db.query('insert into asiakas (idAsiakas,Etunimi,Sukunimi,Puhelinnumero,Kotiosoite,Salasana) values(?,?,?,?,?,?)',
        [asiakas.idAsiakas, asiakas.Etunimi, asiakas.Sukunimi, asiakas.Puhelinnumero, asiakas.Kotiosoite, asiakas.Salasana], callback);
    },
    delete: function (id, callback){
        return db.query('delete from asiakas where idAsiakas=?',[id], callback);
    }, 
    update: function (idAsiakas, asiakas, callback){
        return db.query(
            'update asiakas set Etunimi=?, Sukunimi=?, Puhelinnumero=?, Kotiosoite=?, Salasana=? where idAsiakas=?',
            [asiakas.Etunimi, asiakas.Sukunimi, asiakas.Puhelinnumero, asiakas.Kotiosoite, asiakas.Salasana, idAsiakas], callback);
    }
};
module.exports = asiakas;