const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile('/IHM/index.html', {root:__dirname});
})
app.get('/a-propos', (req, res) => {
    res.status(200).sendFile('/IHM/apropos.html', {root:__dirname});
})
app.use((req, res) => {
    res.status(404).sendFile('/IHM/404.html', {root:__dirname});
})

app.listen(port, () =>{
    console.log("Server listening on port " + port);
});