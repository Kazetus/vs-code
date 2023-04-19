const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const listeRoutes = require('./routes/listeRoutes');
const optionBDD = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'todolist'
};

app.use(myConnection(mysql, optionBDD, 'pool'));
app.use(express.static('public'));
app.set('views', './IHM');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}))
app.use(listeRoutes);

app.get('/a-propos', (req, res) => {
    res.status(200).render('apropos');
})
app.use((req, res) => {
    res.status(404).render('404');
})

app.listen(port, () =>{
    console.log("Server listening on port " + port);
});