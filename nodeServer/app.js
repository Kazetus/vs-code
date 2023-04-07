const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;


app.use('/public', express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('requete effectué: ' + Date().toString());
    next();
})

app.get('/home', function (req, res) {
    res.status(200).sendFile('/html/index.html', {root : __dirname});
});
app.get('/profil', function (req, res) {
    res.status(200).sendFile('/html/profil.html', {root : __dirname});
});
app.get('/contact', function (req, res) {
    res.status(200).sendFile('/html/contact.html', {root : __dirname});
});

app.get('/', function (req, res) {
    res.status(304).redirect('/home');
});
app.use((req, res) => {
    res.status(404).sendFile('/html/404.html', {root : __dirname});
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});