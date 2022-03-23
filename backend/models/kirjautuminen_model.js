const db = require('../db');

const kirjautuminen={
  checkPassword: function(etunimi, callback) {
      return db.query('SELECT salasana FROM asiakas WHERE etunimi = ?',[etunimi], callback); 
    }
};
          
module.exports = kirjautuminen;