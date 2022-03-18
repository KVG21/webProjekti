const db = require('../db');

const kirjautuminen={
  checkPassword: function(Etunimi, callback) {
      return db.query('SELECT Salasana FROM asiakas WHERE Etunimi = ?',[Etunimi], callback); 
    }
};
          
module.exports = kirjautuminen;