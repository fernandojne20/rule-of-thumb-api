var mongoose = require('mongoose');

var CandidateSchema = mongoose.Schema({
    id: Number,
    name: String,
    message: String,
    section: String,
    published: String,
    upVotes: Number,
    downVotes: Number,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);