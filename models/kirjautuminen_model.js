const db = require('../db');

const kirjautuminen={
  getById: function (puhnro, callback){
    return db.query('select * from asiakas where puhnro=?', [puhnro], callback);
}, 
  checkPassword: function(puhnro, callback) {
      return db.query('SELECT salasana FROM asiakas WHERE puhnro = ?',[puhnro], callback); 
    }
};
          
module.exports = kirjautuminen;