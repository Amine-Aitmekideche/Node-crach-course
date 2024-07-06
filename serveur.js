const http = require('http')

const serveur = http.createServer((req, res) =>{
 console.log('requist made')
})
// (req, res) => { ... } : Il s'agit d'une fonction de rappel (callback) qui sera exécutée chaque fois qu'une requête HTTP est reçue par le serveur.

serveur.listen(3000 ,'localhost' , ()=>{
    console.log('listening for requests on port 3000')
})
// serveur.listen(3000, 'localhost', ...) : Cette méthode fait en sorte que le serveur écoute sur le port 3000 de l'adresse 'localhost'.
// () => { ... } : Il s'agit d'une fonction de rappel qui sera exécutée une fois que le serveur a commencé à écouter.
