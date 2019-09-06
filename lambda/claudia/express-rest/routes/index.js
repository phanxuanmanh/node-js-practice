const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const uuid = require('uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ name: 'Developer', skills: ['Java', 'Angular'] });
});

router.post('/add', function(req, res, next) {
    let application = req.body.user;
    submitApplication(applicationWithId(application))
        .then(result => {
            res.send('success');
        })
        .catch(err => {
            res.send(JSON.stringify(err));
        });
});

const submitApplication = candidate => {
    console.log('Submitting candidate');
    const candidateInfo = {
        TableName: 'Application',
        Item: candidate,
    };
    return dynamoDb.put(candidateInfo).promise()
        .then(res => candidate);
};

const applicationWithId = (application) => {
    application.id = uuid.v1();
    return application;
};

module.exports = router;
