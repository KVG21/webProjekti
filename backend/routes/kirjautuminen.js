
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const kirjautuminen = require('../models/kirjautuminen_model');

router.get('/:id?', function (req, res) {
  if(req.params.id){
      kirjautuminen.getById(req.params.id, function (err, dbResult){
          if(err) { 
              res.json(err);
          } else{
              res.json(dbResult);
          }
      });
  }
});

router.post('/', 
  function(request, response) {
    if(request.body.puhnro && request.body.salasana){
      const puhnro = request.body.puhnro;
      const salasana = request.body.salasana;
        kirjautuminen.checkPassword(puhnro, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError);
          }
          else{
            if (dbResult.length > 0) {
              bcrypt.compare(salasana,dbResult[0].salasana, function(err,compareResult) 
              {
                if(compareResult) {
                  console.log("Onnistui");
                  response.status(204).send('found');

                }
                else {
                    console.log("Väärä Salasana");
                    response.status(404).send('Not Found');
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
      console.log("puhnro tai Salasana puuttuu");
      response.send(false);
    }
  }
);

module.exports=router;