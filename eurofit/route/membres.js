const {
    connection
} = require('../server');

const path = (app) => {
    app.get('/membres', (req, res) => {
        connection.query('SELECT nom_membres, prenom_membres, m.tel, m.mail, adresse, ville, quartier, code_postal, pays, nom_club, titre, nom_medecin, prenom_medecin FROM membres m INNER JOIN adresse ad ON ad.id_adresse = m.id_adresse INNER JOIN ville v ON v.id_ville = ad.id_adresse INNER JOIN code_postal cp ON cp.id_code_postal = ad.id_code_postal INNER JOIN pays p ON p.id_pays = ad.id_pays INNER JOIN quartier q ON q.id_quartier = ad.id_quartier INNER JOIN club ON club.id_club = m.id_club  INNER JOIN medecin ON medecin.id_medecin = m.id_medecin INNER JOIN abonnement ON abonnement.id_abonnement = m.id_abonnement;', [], (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
    app.get('/membres/:id', (req, res) => {
        const id_membres = req.params.id
        connection.query('SELECT nom_membres, prenom_membres, m.tel, m.mail, adresse, ville, quartier, code_postal, pays, nom_club, titre, nom_medecin, prenom_medecin FROM membres m INNER JOIN adresse ad ON ad.id_adresse = m.id_adresse INNER JOIN ville v ON v.id_ville = ad.id_adresse INNER JOIN code_postal cp ON cp.id_code_postal = ad.id_code_postal INNER JOIN pays p ON p.id_pays = ad.id_pays INNER JOIN quartier q ON q.id_quartier = ad.id_quartier INNER JOIN club ON club.id_club = m.id_club  INNER JOIN medecin ON medecin.id_medecin = m.id_medecin INNER JOIN abonnement ON abonnement.id_abonnement = m.id_abonnement WHERE id_membres = ?', [id_membres], (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
    app.get('/membres/:colonne/:data', (req, res) => {
        const colonne = req.params.colonne;
        const data = req.params.data;
        console.log(data);
        console.log('SELECT nom_membres, prenom_membres, m.tel, m.mail, adresse, ville, quartier, code_postal, pays, nom_club, titre, nom_medecin, prenom_medecin FROM membres m INNER JOIN adresse ad ON ad.id_adresse = m.id_adresse INNER JOIN ville v ON v.id_ville = ad.id_adresse INNER JOIN code_postal cp ON cp.id_code_postal = ad.id_code_postal INNER JOIN pays p ON p.id_pays = ad.id_pays INNER JOIN quartier q ON q.id_quartier = ad.id_quartier INNER JOIN club ON club.id_club = m.id_club  INNER JOIN medecin ON medecin.id_medecin = m.id_medecin INNER JOIN abonnement ON abonnement.id_abonnement = m.id_abonnement WHERE '+colonne+' LIKE "%'+data+'%"');
        connection.query('SELECT nom_membres, prenom_membres, m.tel, m.mail, adresse, ville, quartier, code_postal, pays, nom_club, titre, nom_medecin, prenom_medecin FROM membres m INNER JOIN adresse ad ON ad.id_adresse = m.id_adresse INNER JOIN ville v ON v.id_ville = ad.id_adresse INNER JOIN code_postal cp ON cp.id_code_postal = ad.id_code_postal INNER JOIN pays p ON p.id_pays = ad.id_pays INNER JOIN quartier q ON q.id_quartier = ad.id_quartier INNER JOIN club ON club.id_club = m.id_club  INNER JOIN medecin ON medecin.id_medecin = m.id_medecin INNER JOIN abonnement ON abonnement.id_abonnement = m.id_abonnement WHERE ? LIKE "%?%"',
         [colonne, data],
         (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
    app.delete('/membres/:id', (req, res) => {
        const id_membres = req.params.id;
        connection.query('DELETE FROM membres WHERE id_membres = ?', [id_membres], (err, results) => {
            if(err) throw err;
            if(results.affectedRows === 0) {
                res.status(404).send('membres non trouvé');
            } else {
                res.status(200).send('membres supprimé avec succès');
            }
        })
    });
    app.post('/membres', (req, res) => {
        const {nom_membres, prenom_membres, tel, mail, certificat_medical, card_number, card_date, CCV, password, id_club, id_abonnement, id_medecin, id_adresse} = req.body;
        let requeteSQL ='INSERT INTO membres(nom_membres, prenom_membres, tel, mail, certificat_medical, card_number, card_date, CCV, password, id_club, id_abonnement, id_medecin, id_adresse) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
        
        connection.query(requeteSQL, [nom_membres, prenom_membres, tel, mail, certificat_medical, card_number, card_date, CCV, password, id_club, id_abonnement, id_medecin, id_adresse], (error) => {
            if (error) throw error;
            res.status(204).send('membre ajouté.');
        })
    });
    app.patch('/membres', (req, res) => {
        const id_membres = req.body.id_membres;
        const data = {
            nom_membres : req.body.nom_membres,
            prenom_membres : req.body.prenom_membres,
            tel : req.body.tel,
            mail : req.body.mail,
            certificat_medical : req.body.certificat_medical,
            card_number : req.body.card_number,
            card_date : req.body.card_date,
            CCV : req.body.CCV,
            password : req.body.password,
            id_club : req.body.id_club,
            id_abonnement : req.body.id_abonnement,
            id_medecin : req.body.id_medecin,
            id_adresse : req.body.id_adresse
        };
        requeteSQL = 'UPDATE membres SET ';
        let count = 0;
        if (id_membres === null) {
         res.status(421).send('Aucun membres ciblé');
        } else {
            for(key in data) { 
                requeteSQL += createRequete(count, key, data[key]);
                count = checkValue(count, data[key]);
            };
            requeteSQL += " WHERE id_membres = ?";
            connection.query(requeteSQL, [id_membres], (error) => {
                if(error) throw error;
                res.status(204).send('membres modifié avec SUCCES !');
            });
        }
    });
    app.put("/membres", (req, res) => {
        const {id_membres, nom_membres, prenom_membres, tel, mail, certificat_medical, card_number, card_date, CCV, password, id_club, id_abonnement, id_medecin, id_adresse} = req.body;
        if(id_membres == null || nom_membres == null || prenom_membres == null || tel == null || mail == null || certificat_medical == null || card_number == null || card_date == null || CCV == null|| password == null|| id_club == null|| id_abonnement == null|| id_medecin == null|| id_adresse == null) {
            res.status(500).send('données non valides');
        } else {
            requeteSQL = 'UPDATE membres SET nom_membres = ?, prenom_membres = ?, tel = ?, mail = ?, certificat_medical = ?, card_number = ?, card_date = ?, CCV = ?, password = ?, id_club = ?, id_abonnement = ?, id_medecin = ?, id_adresse = ? WHERE id_membres = ?';
            connection.query(requeteSQL, [nom_membres, prenom_membres, tel, mail, certificat_medical, card_number, card_date, CCV, password, id_club, id_abonnement, id_medecin, id_adresse, id_membres], (error) => {
                if(error) throw error;
                res.status(204).send('membres modifié avec SUCCES');
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