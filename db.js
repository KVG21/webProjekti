const mysql = require('mysql');
const aws = require('aws-sdk');

var connection = new aws.Connection({
	host : process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DB
});
module.exports = connection