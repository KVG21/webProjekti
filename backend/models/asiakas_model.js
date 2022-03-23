const db = require('../db');
const bcrypt = require('bcryptjs');

const asiakas = {
    getById: function (id, callback){
        return db.query('select * from asiakas where idAsiakas=?', [id], callback);
    }, 
    getAll: function (callback){
        return db.query('select * from asiakas', callback);
    }, 

    add: function(asiakas, callback) {
        bcrypt.hash(asiakas.salasana,10,function(err,hash){
          return db.query(
        'insert into asiakas (etunimi,sukunimi,puhnro,kotiosoite,salasana) values(?,?,?,?,?)',
        [asiakas.etunimi, asiakas.sukunimi, asiakas.puhnro, asiakas.kotiosoite, hash],
        callback);});      
    },
    delete: function (id, callback){
        return db.query('delete from asiakas where idAsiakas=?',[id], callback);
    }, 
    update: function (idAsiakas, asiakas, callback){

        bcrypt.hash(asiakas.salasana,10,function(err,hash){
            return db.query(
            'update asiakas set etunimi=?, sukunimi=?, puhnro=?, kotiosoite=?, Salasana=? where idAsiakas=?',
              [asiakas.etunimi, asiakas.sukunimi, asiakas.puhnrro, asiakas.kotiosoite, hash, idAsiakas],
              callback);});
    }
};
module.exports = asiakas;