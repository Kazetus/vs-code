const express = require('express');
const mysql = require('mysql');

const app = express();
// app.use(express.urlencoded({extended : true}));
app.use(express.json());
const port = process.env.PORT || 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    port : 3306,
    database : 'euro_fit_matthias'
});

module.exports = {app, port, connection};