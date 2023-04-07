const fs = require('fs');

if (fs.existsSync('./monDossier')) {
    fs.unlink('./monDossier/nouveauFichier.txt', (error) => {
        if(error) {
            console.log(error);
        } else {
            fs.rmdir('./monDossier', (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('dossier et fichier supprimé');
                }
            })
        }
    });
} else {
    fs.mkdir('./monDossier', (error) => {
        if (error) {
            console.log(error);
        } else {
            fs.writeFile('./monDossier/nouveauFichier.txt', 'Fichier créé avec nodeJs',(error) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log('le dossier et le fichier ont été créé avec succès.')
                }
            });
        }
    })
}