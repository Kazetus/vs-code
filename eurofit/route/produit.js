const {
    connection
} = require('../server');

const path = (app) => {
    
    app.get('/produit', (req, res) => {
        connection.query('SELECT intitule, fournisseur, fabriquant, prix_HT, categorie FROM produit p INNER JOIN categorie c ON c.id_categorie = p.id_categorie;', [], (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
    app.get('/produit/:id', (req, res) => {
        const id_produit = req.params.id
        connection.query('SELECT intitule, fournisseur, fabriquant, prix_HT, categorie FROM produit p INNER JOIN categorie c ON c.id_categorie = p.id_categorie WHERE id_produit = ?', [id_produit], (error, results) => {
            if (error) throw error;
            res.json(results);
        });
    });
    app.delete('/produit/:id', (req, res) => {
        const id_produit = req.params.id;
        connection.query('DELETE FROM produit WHERE id_produit = ?', [id_produit], (err, results) => {
            if(err) throw err;
            if(results.affectedRows === 0) {
                res.status(404).send('produit non trouvé');
            } else {
                res.status(200).send('produit supprimé avec succès');
            }
        })
    });
    app.post('/produit', (req, res) => {
        const {intitule, fournisseur, id_categorie, fabriquant, prix_ht} = req.body;
        let requeteSQL ='INSERT INTO produit(intitule, fournisseur, id_categorie, fabriquant, prix_ht) values(?, ?, ?, ?, ?);';
        
        connection.query(requeteSQL, [intitule, fournisseur, id_categorie, fabriquant, prix_ht], (error) => {
            if (error) throw error;
            res.status(204).send('produit ajouté.');
        })
    });
    app.patch('/produit', (req, res) => {
        const id_produit = req.body.id_produit;
        const data = {
            intitule : req.body.intitule,
            fournisseur : req.body.fournisseur,
            id_categorie : req.body.id_categorie,
            fabriquant : req.body.fabriquant,
            prix_ht : req.body.prix_ht
        };
        requeteSQL = 'UPDATE produit SET ';
        let count = 0;
        if (id_produit === null) {
         res.status(421).send('Aucun produit ciblé');
        } else {
            for(key in data) { 
                requeteSQL += createRequete(count, key, data[key]);
                count = checkValue(count, data[key]);
            };
            requeteSQL += " WHERE id_produit = ?";
            connection.query(requeteSQL, [id_produit], (error) => {
                if(error) throw error;
                res.status(204).send('produit modifié avec SUCCES !');
            });
        }
    });
    app.put("/produit", (req, res) => {
        const {id_produit, intitule, fournisseur, id_categorie, fabriquant, prix_ht} = req.body;
        if(id_produit == null || intitule == null || fournisseur == null || id_categorie == null || fabriquant == null || prix_ht == null) {
            res.status(500).send('données non valides');
        } else {
            requeteSQL = 'UPDATE produit SET intitule = ?, fournisseur = ?, id_categorie = ?, fabriquant = ?, prix_ht = ? WHERE id_produit = ?';
            connection.query(requeteSQL, [intitule, fournisseur, id_categorie, fabriquant, prix_ht, id_produit], (error) => {
                if(error) throw error;
                res.status(204).send('produit modifié avec SUCCES');
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
        console.log("n'a pas validé");
        return "";
    }
}
module.exports = path;