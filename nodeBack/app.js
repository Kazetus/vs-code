const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
const myConnection = require('express-myconnection');
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

app.get('/', (req, res)=>{
    req.getConnection((error, connection)=>{
      if (error) {
        console.error(error);
      } else {
        connection.query('SELECT * FROM liste', [], (error, data)=>{
          if (error) {
            console.error(error);
          } else {
            res.status(200).render('index', {data})
          }
        })
      }
    })
});
app.get('/a-propos', (req, res) => {
    res.status(200).render('apropos');
})
app.use((req, res) => {
    res.status(404).render('404');
})

app.listen(port, () =>{
    console.log("Server listening on port " + port);
});