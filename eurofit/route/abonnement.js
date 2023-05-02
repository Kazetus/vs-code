const {
    connection
} = require('../server');

const path = (app) => {
    
    app.get('/abonnement', (req, res) => {
        connection.query('SELECT * FROM abonnement;', [], (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
    app.get('/abonnement/:id', (req, res) => {
        const id_abonnement = req.params.id
        connection.query('SELECT * FROM abonnement WHERE id_abonnement = ?', [id_abonnement], (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
    app.delete('/abonnement/:id', (req, res) => {
        const id_abonnement = req.params.id;
        connection.query('DELETE FROM abonnement WHERE id_abonnement = ?', [id_abonnement], (err, results) => {
            if(err) throw err;
            if(results.affectedRows === 0) {
                res.status(404).send('Abonnement non trouvé');
            } else {
                res.status(200).send('abonnement supprimé avec succès');
            }
        })
    });
    app.post('/abonnement', (req, res) => {
        const {titre, tout_club, toutes_salles, tout_pays, reduc_complement, reduc_medecine, reduc_coach, tarif} = req.body;
        let requeteSQL ='INSERT INTO abonnement(titre, tout_club, toutes_salles, tout_pays, reduc_complement, reduc_medecine, reduc_coach, tarif) values(?, ?, ?, ?, ?, ?, ?, ?);';
        
        connection.query(requeteSQL, [titre, tout_club, toutes_salles, tout_pays, reduc_complement, reduc_medecine, reduc_coach, tarif], (error) => {
            if (error) throw error;
            res.status(200).send('abonnement ajouté.');
        })
    });
    app.patch('/abonnement', (req, res) => {
        const id_abonnement = req.body.id_abonnement;
        const data = {
            titre : req.body.titre,
            tout_club : req.body.tout_club,
            toutes_salles : req.body.toutes_salles,
            tout_pays : req.body.tout_pays,
            reduc_complement : req.body.reduc_complement,
            reduc_medecine : req.body.reduc_medecine,
            reduc_coach : req.body.reduc_coach,
            tarif : req.body.tarif
        };
        requeteSQL = 'UPDATE abonnement SET ';
        let count = 0;
        if (id_abonnement === null) {
         res.status(421).send('Aucun abonnement ciblé');
        } else {
            for(key in data) { 
                requeteSQL += createRequete(count, key, data[key]);
                count = checkValue(count, data[key]);
            };
            requeteSQL += " WHERE id_abonnement = ?";
            connection.query(requeteSQL, [id_abonnement], (error) => {
                if(error) throw error;
                res.status(200).send('abonnement modifié avec SUCCES !');
            });
        }
    });
    app.put("/abonnement", (req, res) => {
        const {id_abonnement, titre, tout_club, toutes_salles, tout_pays, reduc_complement, reduc_medecine, reduc_coach, tarif} = req.body;
        if(id_abonnement == null || titre == null || tout_club == null || toutes_salles == null || tout_pays == null || reduc_complement == null || reduc_medecine == null || reduc_coach == null || tarif == null) {
            res.status(500).send('données non valides');
        } else {
            requeteSQL = 'UPDATE abonnement SET titre = ?, tout_club = ?, toutes_salles = ?, tout_pays = ?, reduc_complement = ?, reduc_medecine = ?, reduc_coach = ?, tarif = ? WHERE id_abonnement = ?';
            connection.query(requeteSQL, [titre, tout_club, toutes_salles, tout_pays, reduc_complement, reduc_medecine, reduc_coach, tarif, id_abonnement], (error) => {
                if(error) throw error;
                res.status(200).send('abonnement modifié avec SUCCES');
            });
        }
    });
}
function checkValue(count, value) {
    if(value) {
        return count+=1;
    }
    return count;
}
function createRequete(count, key, value) {
    if(value !==null && value !== undefined) {
        if(typeof value == 'string') {
            if (count > 0) {
                
                return `, ${key} = '${value}'`;
            }
            return `${key} = '${value}'`;
        } else {
            if (count > 0) {
                
                return `, ${key} = ${value}`;
            }
            return `${key} = ${value}`;
        }
    } else {
        return "";
    }
}
module.exports = path;