const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    req.getConnection((error, connection)=>{
      if (error) {
        console.error(error);
        res.status(500).render('erreur', {error});
      } else {
        connection.query('SELECT * FROM liste', [], (error, data)=>{
          if (error) {
            console.error(error);
            res.status(500).render('erreur', {error});
          } else {
            res.status(300).render('index', {data});
          }
        })
      }
    })
});
router.post('/send', (req, res)=>{
  let id = req.body.id === "" ? null : req.body.id;
  let title = req.body.title;
  let description = req.body.description;
  let requeteSQL = id === null ? 'INSERT INTO liste(titre,description) values(?, ?);' : 'UPDATE liste SET titre = ?, description = ? WHERE id = ?';
  let dataSQL = id === null ? [title, description] : [title, description, id];
  if(title == '' || description == '') {
    res.status(421).render('errorvide');
  } else {
    req.getConnection((error, connection) => {
      if(error) {
        console.error(error);
        res.status(500).render('erreur', {error});
      } else {
        connection.query(requeteSQL, dataSQL, (error) =>{
          if(error) {
            console.error(error);
            res.status(500).render('erreur', {error});
          } else {
              res.status(300).redirect('/');
          }
        })
      }
    });
  }
});

router.delete('/send/:id', (req, res) => {
  let id = req.params.id;
  req.getConnection((error, connection)=>{
    if (error) {
      console.error(error);
      res.status(500).render('erreur', {error});
    } else {
      connection.query('DELETE FROM liste WHERE id = ?', [id], (error)=>{
        if (error) {
          console.error(error);
          res.status(500).render('erreur', {error});
        } else {
          res.status(200).json({routeRacine : '/'});
        }
      })
    }
  })
})

module.exports = router;