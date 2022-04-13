const db = require('../db');

const kirjautuminen={
  checkPassword: function(puhnum, callback) {
      return db.query('SELECT salasana FROM asiakas WHERE puhnum = ?',[puhnum], callback); 
    }
};
          
module.exports = kirjautuminen;