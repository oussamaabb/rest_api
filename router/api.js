const express = require('express');
const router = express.Router();
const car = require('../models/car');

//getting all cars in the database, 
router.get('/car',function(req,res,next){
    car.find({}).then(function(car){
        res.send(car);
    }).catch(next);
});
// add new car
router.post('/car',function(req,res,next){
    car.create(req.body).then(function(car){
        res.send(car);
    }).catch(next);
});

// update a car in the database
router.put('/car/:id',function(req,res,next){
    car.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        car.findOne({_id: req.params.id}).then(function(car){
            res.send(car);
        });
    });
});

// delete a car in the database
router.delete('/car/:id',function(req,res,next){
    car.findOneAndDelete({_id: req.params.id}).then(function(car){
        res.send(car);
    });
});

module.exports = router;

