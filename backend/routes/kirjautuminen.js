const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const kirjautuminen = require('../models/kirjautuminen_model');

router.post('/', 
  function(request, response) {
    if(request.body.etunimi && request.body.salasana){
      const etunimi = request.body.etunimi;
      const salasana = request.body.salasana;
        kirjautuminen.checkPassword(etunimi, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError);
          }
          else{
            if (dbResult.length > 0) {
              bcrypt.compare(salasana,dbResult[0].salasana, function(err,compareResult) 
              {
                if(compareResult) {
                  console.log("Onnistui");
                  response.send(true);
                  
                }
                else {
                    console.log("Väärä Salasana");
                    response.send(false);
                }			
              }
              );
            }
            else{
              console.log("Käyttäjää ei ole olemassa");
              response.send(false);
            }
          }
          }
        );
      }
    else{
      console.log("Etunimi tai Salasana puuttuu");
      response.send(false);
    }
  }
);

module.exports=router;