const express = require('express');
const router = express.Router();
const ravintola = require('../models/ravintola_model.js');

router.get('/:id?', function (req, res) {
    if(req.params.id){
        ravintola.getById(req.params.id, function (err, dbResult){
            if(err) { 
                res.json(err);
            } else{
                res.json(dbResult);
            }
        });
    } 
    else {
        ravintola.getAll(function (err, dbResult){
            if(err) {
                res.json(err);
            } else {
                res.json(dbResult);
            }
        });
    }
});


router.post('/',
function(req, res){
    ravintola.add(req.body, function (err, dbResult){
        if(err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.delete('/:idRavintola',
function(req,res){
    ravintola.delete(req.params.idRavintola, function(err, dbResult){
        if(err) {
            res.json(err);
        } else{
            res.json(dbResult);
        }
    });
});

router.put('/:idRavintola', function(req, res){
    ravintola.update(req.params.idRavintola, req.body, function(err, dbResult){
        if(err) {
            res.json(err);
        } else {
            res.json(dbResult);
        }
    });
});

module.exports = router;