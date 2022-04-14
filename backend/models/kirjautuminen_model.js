const db = require('../db');

const kirjautuminen={
  checkPassword: function(puhnro, callback) {
      return db.query('SELECT salasana FROM asiakas WHERE puhnro = ?',[puhnro], callback); 
    }
};
          
module.exports = kirjautuminen;