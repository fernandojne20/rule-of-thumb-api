var Candidate = require('../models/candidate.model.js');

exports.create = function (req, res) {
    //create and save a new hotel
    if(!req.body.id) {
        res.status(400).send({message: "Id can not be empty"});
    }
    if(!req.body.name) {
        res.status(400).send({message: "Name can not be empty"});
    }
    if(!req.body.message) {
        res.status(400).send({message: "message can not be empty"});
    }
    if(!req.body.section) {
        res.status(400).send({message: "section can not be empty"});
    }
    if(!req.body.published) {
        res.status(400).send({message: "published can not be empty"});
    }
    if(!req.body.upVotes) {
        res.status(400).send({message: "upVotes can not be empty"});
    }
    if(!req.body.downVotes) {
        res.status(400).send({message: "downVotes can not be empty"});
    }
    if(!req.body.image) {
        res.status(400).send({message: "image can not be empty"});
    }

    var hotel = new Candidate({
        id: req.body.id, 
        name: req.body.name,
        message: req.body.message,
        section: req.body.section,
        published: req.body.published,
        upVotes: req.body.upVotes,
        downVotes: req.body.downVotes,
        image: req.body.image,

    });

    hotel.save(function (err, data) {
       console.log(data);
       if(err){
           console.log(err);
           res.status(500).send({message: "Some error occurred while creating the candidate."});
       } else{
           res.send(data);
       }
    });
}

exports.findAll = function (req, res) {

    var condition = {};
    if (req.query.stars){
        condition.stars = {"$in" : req.query.stars};
    }
    if (req.query.name){
        condition.name = {$regex: req.query.name, $options: 'i'};
    }

    //Retrieve and return all hotel from the database.
    Candidate.find(condition,function (err, candidates) {
       if (err){
           res.status(500).send({message: "Some error ocurred while retrieving candidates"});
       } else {
           res.send(candidates);
       }
    });
}

exports.findOne = function (req, res) {
    //Find a single hotel with a hotelId
    Candidate.find({id: req.params.candidateId}, function (err, data) {
       if (err) {
            res.status(500).send({message: "could not retrieve candidate with id " + req.params.candidateId});
       } else{
            res.send(data);
       }
    });
}

exports.update = function (req, res) {
    //Update a hotel indetified by the hotelId in the request
    var values = {
        name: req.body.name,
        message: req.body.message,
        section: req.body.section,
        published: req.body.published,
        upVotes: req.body.upVotes,
        downVotes: req.body.downVotes,
        image: req.body.image,
    };

    Candidate.findOneAndUpdate({id: req.params.candidateId},{$set: values},{new: true}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not find a candidate with id " + req.params.hotelId});
        }else{
            res.send(data);
        }
    });
}

exports.voteUpdate = function (req, res) {
    //Update a hotel indetified by the hotelId in the request
    if(req.body.voteType === 'UP'){
        var values = {
            upVotes: 1
        }
    } else if (req.body.voteType === 'DOWN')
    var values = {
        downVotes: 1
    };

    Candidate.findOneAndUpdate({id: req.params.candidateId},{$inc: values},{new: true}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not find a candidate with id " + req.params.hotelId});
        }else{
            res.status(202).send(data);
        }
    });
}

exports.delete = function (req, res) {
    //delete a hotel with the especified hotelId in the request
    Candidate.remove({id: req.params.candidateId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete candidate with id " + req.params.candidateId});
        } else {
            res.send({message: "candidate deleted successfully!"});
        }
    });
}