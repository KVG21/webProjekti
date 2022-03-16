const express = require('express');
const router = express.Router();
const ravintoloitsija = require('../models/ravintoloitsija_model.js');

router.get('/:id?', function (req, res) {
    if(req.params.id){
        ravintoloitsija.getById(req.params.id, function (err, dbResult){
            if(err) { 
                res.json(err);
            } else{
                res.json(dbResult);
            }
        });
    } else {
        ravintoloitsija.getAll(function (err, dbResult){
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
    ravintoloitsija.add(req.body, function (err, dbResult){
        if(err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.delete('/:idravintoloitsija',
function(req,res){
    ravintoloitsija.delete(req.params.idravintoloitsija, function(err, dbResult){
        if(err) {
            res.json(err);
        } else{
            res.json(dbResult);
        }
    });
});

router.put('/:idravintoloitsija', function(req, res){
    ravintoloitsija.update(req.params.idravintoloitsija, req.body, function(err, dbResult){
        if(err) {
            res.json(err);
        } else {
            res.json(dbResult);
        }
    });
});

module.exports = router;