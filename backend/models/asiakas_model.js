const db = require('../db');
const bcrypt = require('bcryptjs');

const asiakas = {
    getById: function (puhnro, callback){
        return db.query('select * from asiakas where puhnro=?', [puhnro], callback);
    }, 
    getAll: function (callback){
        return db.query('select * from asiakas', callback);
    }, 

    add: function(asiakas, callback) {
        bcrypt.hash(asiakas.salasana,10,function(err,hash){
          return db.query(
        'insert into asiakas (etunimi,sukunimi,puhnro,osoite,salasana,tyyppi) values(?,?,?,?,?,?)',
        [asiakas.etunimi, asiakas.sukunimi, asiakas.puhnro, asiakas.osoite, hash, asiakas.tyyppi],
        callback);});      
    },
    delete: function (id, callback){
        return db.query('delete from asiakas where idAsiakas=?',[id], callback);
    }, 
    update: function (idAsiakas, asiakas, callback){

        bcrypt.hash(asiakas.salasana,10,function(err,hash){
            return db.query(
            'update asiakas set etunimi=?, sukunimi=?, puhnro=?, osoite=?, salasana=?,tyyppi=? where idAsiakas=?',
              [asiakas.etunimi, asiakas.sukunimi, asiakas.puhnro, asiakas.osoite, hash, asiakas.tyyppi, idAsiakas],
              callback);});
    }
};
module.exports = asiakas;