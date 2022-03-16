const express = require('express');
const router = express.Router();
const historia = require('../models/historia_model.js');

router.get('/:id?', function (req, res) {
    if(req.params.id){
        historia.getById(req.params.id, function (err, dbResult){
            if(err) { 
                res.json(err);
            } else{
                res.json(dbResult);
            }
        });
    } else {
        historia.getAll(function (err, dbResult){
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
    historia.add(req.body, function (err, dbResult){
        if(err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.delete('/:idhistoria',
function(req,res){
    historia.delete(req.params.idhistoria, function(err, dbResult){
        if(err) {
            res.json(err);
        } else{
            res.json(dbResult);
        }
    });
});

router.put('/:idhistoria', function(req, res){
    historia.update(req.params.idhistoria, req.body, function(err, dbResult){
        if(err) {
            res.json(err);
        } else {
            res.json(dbResult);
        }
    });
});

module.exports = router;