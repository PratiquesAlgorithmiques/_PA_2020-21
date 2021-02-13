const express = require('express')
const app = express();
const http = require('http').createServer(app);

http.listen(5000, () => {
    console.log('yes      localhost:5000');
});

/* ----------- */

app.use(express.static('public', {index:false}))    // permet de désactiver le index.html par défaut

app.get('/', (req, res) => {

    var i = Math.floor(Math.random() * 2);          // un chiffre aléatoire, 0 ou 1

    console.log(i);

    if (i == 0) {
        res.sendFile(__dirname + '/public/index.html');	// sendFile est pour les pages html, __dirname est une variable système qui permet d’avoir l’adresse complet du fichier
    } else {
        res.sendFile(__dirname + '/public/index2.html');
    }
});