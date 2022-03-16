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
    } else {
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

router.delete('/:idravintola',
function(req,res){
    ravintola.delete(req.params.idravintola, function(err, dbResult){
        if(err) {
            res.json(err);
        } else{
            res.json(dbResult);
        }
    });
});

router.put('/:idravintola', function(req, res){
    ravintola.update(req.params.idravintola, req.body, function(err, dbResult){
        if(err) {
            res.json(err);
        } else {
            res.json(dbResult);
        }
    });
});

module.exports = router;