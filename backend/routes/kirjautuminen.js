const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const kirjautuminen = require('../models/kirjautuminen_model');

router.post('/', 
  function(request, response) {
    if(request.body.Etunimi && request.body.Salasana){
      const Etunimi = request.body.Etunimi;
      const Salasana = request.body.Salasana;
        kirjautuminen.checkPassword(Etunimi, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError);
          }
          else{
            if (dbResult.length > 0) {
              bcrypt.compare(Salasana,dbResult[0].Salasana, function(err,compareResult) 
              {
                if(compareResult) {
                  console.log("success");
                  response.send(true);
                  
                }
                else {
                    console.log("wrong Salasana");
                    response.send(false);
                }			
              }
              );
            }
            else{
              console.log("user does not exists");
              response.send(false);
            }
          }
          }
        );
      }
    else{
      console.log("Etunimi or Salasana missing");
      response.send(false);
    }
  }
);

module.exports=router;