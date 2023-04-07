const express = require('express');
const app = express();
const port = 8080;
const humain = {
    name:"Matthias",
    age:32
}
const tache = [
    {
        titre: "Apprendre Node",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate veniam, corporis ex vero consequatur illum doloremque laborum architecto, quia nemo exercitationem tenetur possimus dicta eaque quibusdam mollitia dolore earum."
    },
    {
        titre: "Apprendre Express",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate veniam, corporis ex vero consequatur illum doloremque laborum architecto, quia nemo exercitationem tenetur possimus dicta eaque quibusdam mollitia dolore earum."
    }
]
app.use(express.static('public'));
app.set('views', './IHM');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200).render('index', {humain, tache});
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