'use strict';
const uuid = require('uuid');
const AWS = require('aws-sdk');

AWS.config.setPromisesDependency(require('bluebird'));

const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports.submitApplication = (event, context, callback) => {
    const requestBody = JSON.parse(event.body);
    submitApplication(candidateInfo(requestBody))
        .then(res => {
            callback(null,
                {
                    statusCode: 200,
                    body: JSON.stringify(
                        requestBody,
                        null,
                        2
                    )
                });
        }).catch(err => {
        callback(null,
            {
                statusCode: 500,
                body: JSON.stringify(
                    'error',
                    null,
                    2
                )
            });
        });
};

const submitApplication = candidate => {
    console.log('Submitting candidate');
    const candidateInfo = {
        TableName: process.env.APPLICATION_TABLE,
        Item: candidate,
    };
    return dynamoDb.put(candidateInfo).promise()
        .then(res => candidate);
};

const candidateInfo = (application) => {
    return {
        id: uuid.v1(),
        name: application.name
    };
};
