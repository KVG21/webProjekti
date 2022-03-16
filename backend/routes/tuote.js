const express = require('express');
const router = express.Router();
const tuote = require('../models/tuote_model.js');

router.get('/:id?', function (req, res) {
    if(req.params.id){
        tuote.getById(req.params.id, function (err, dbResult){
            if(err) { 
                res.json(err);
            } else{
                res.json(dbResult);
            }
        });
    } else {
        tuote.getAll(function (err, dbResult){
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
    tuote.add(req.body, function (err, dbResult){
        if(err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.delete('/:idtuote',
function(req,res){
    tuote.delete(req.params.idtuote, function(err, dbResult){
        if(err) {
            res.json(err);
        } else{
            res.json(dbResult);
        }
    });
});

router.put('/:idtuote', function(req, res){
    tuote.update(req.params.idtuote, req.body, function(err, dbResult){
        if(err) {
            res.json(err);
        } else {
            res.json(dbResult);
        }
    });
});

module.exports = router;