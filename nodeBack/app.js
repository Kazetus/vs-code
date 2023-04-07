const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.set('views', './IHM');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200).render('index');
})
app.get('/a-propos', (req, res) => {
    res.status(200).render('apropos');
})
app.use((req, res) => {
    res.status(404).render('404');
})

app.listen(port, () =>{
    console.log("Server listening on port " + port);
});