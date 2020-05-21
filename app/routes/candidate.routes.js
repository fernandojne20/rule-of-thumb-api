module.exports = function (app) {
  var candidates = require('../controllers/candidate.controller.js');

  // create a New Candidate

  app.post('/candidates', candidates.create);

  //retrieve all candidates
  app.get('/candidates', candidates.findAll);

  //retrieve a single Candidate with candidateId
  app.get('/candidates/:candidateId', candidates.findOne);

  //Update a Candidate with candidateId
  app.put('/candidates/:candidateId', candidates.update);

  app.put('/vote/:candidateId', candidates.voteUpdate);

  //delete a Candidate with candidateId
  app.delete('/candidates/:candidateId', candidates.delete);

  //Insert initial dummy data
  // app.post('/candidates/dummy', candidates.dummyData);
}