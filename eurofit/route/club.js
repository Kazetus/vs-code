const {
    connection
} = require('../server');

const path = (app) => {
    app.get('/club', (req, res) => {
        connection.query('SELECT nom_club,mail,tel,superficie,contrat_assurance, nom_assurance, adresse, ville, quartier, code_postal, pays FROM club c INNER JOIN assurance a ON a.id_assurance = c.id_assurance INNER JOIN adresse ad ON ad.id_adresse = c.id_adresse INNER JOIN ville v ON v.id_ville = ad.id_adresse INNER JOIN code_postal cp ON cp.id_code_postal = ad.id_code_postal INNER JOIN pays p ON p.id_pays = ad.id_pays INNER JOIN quartier q ON q.id_quartier = ad.id_quartier;', [], (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
    app.get('/club/:id', (req, res) => {
        const id_club = req.params.id
        connection.query('SELECT nom_club,mail,tel,superficie,contrat_assurance, nom_assurance, adresse, ville, quartier, code_postal, pays FROM club c INNER JOIN assurance a ON a.id_assurance = c.id_assurance INNER JOIN adresse ad ON ad.id_adresse = c.id_adresse INNER JOIN ville v ON v.id_ville = ad.id_adresse INNER JOIN code_postal cp ON cp.id_code_postal = ad.id_code_postal INNER JOIN pays p ON p.id_pays = ad.id_pays INNER JOIN quartier q ON q.id_quartier = ad.id_quartier WHERE id_club = ?', [id_club], (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
    app.delete('/club/:id', (req, res) => {
        const id_club = req.params.id;
        connection.query('DELETE FROM club WHERE id_club = ?', [id_club], (err, results) => {
            if(err) throw err;
            if(results.affectedRows === 0) {
                res.status(404).send('club non trouvé');
            } else {
                res.status(200).send('club supprimé avec succès');
            }
        })
    });
    app.post('/club', (req, res) => {
        const {nom_club, mail, tel, superficie, contrat_assurance, id_adresse, id_assurance} = req.body;
        let requeteSQL ='INSERT INTO club(nom_club, mail, tel, superficie, contrat_assurance, id_adresse, id_assurance) values(?, ?, ?, ?, ?, ?, ?);';
        
        connection.query(requeteSQL, [nom_club, mail, tel, superficie, contrat_assurance, id_adresse, id_assurance], (error) => {
            if (error) throw error;
            res.status(204).send('membre ajouté.');
        })
    });
    app.patch('/club', (req, res) => {
        const id_club = req.body.id_club;
        const data = {
            nom_club : req.body.nom_club,
            mail : req.body.mail,
            tel : req.body.tel,
            superficie : req.body.superficie,
            contrat_assurance : req.body.contrat_assurance,
            id_adresse : req.body.id_adresse,
            id_assurance : req.body.id_assurance
        };
        requeteSQL = 'UPDATE club SET ';
        let count = 0;
        if (id_club === null) {
         res.status(421).send('Aucun club ciblé');
        } else {
            for(key in data) { 
                requeteSQL += createRequete(count, key, data[key]);
                count = checkValue(count, data[key]);
            };
            requeteSQL += " WHERE id_club = ?";
            connection.query(requeteSQL, [id_club], (error) => {
                if(error) throw error;
                res.status(204).send('club modifié avec SUCCES !');
            });
        }
    });
    app.put("/club", (req, res) => {
        const {id_club, nom_club, mail, tel, superficie, contrat_assurance, id_adresse, id_assurance} = req.body;
        if(id_club == null || nom_club == null || mail == null || tel == null || superficie == null || contrat_assurance == null || id_adresse == null || id_assurance == null) {
            res.status(500).send('données non valides');
        } else {
            requeteSQL = 'UPDATE club SET nom_club = ?, mail = ?, tel = ?, superficie = ?, contrat_assurance = ?, id_adresse = ?, id_assurance = ? WHERE id_club = ?';
            connection.query(requeteSQL, [nom_club, mail, tel, superficie, contrat_assurance, id_adresse, id_assurance, id_club], (error) => {
                if(error) throw error;
                res.status(204).send('club modifié avec SUCCES');
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
    if(value) {
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