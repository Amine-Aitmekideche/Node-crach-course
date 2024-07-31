const http = require('http')
const fs = require('fs')
const lo = require('lodash')

const serveur = http.createServer((req, res) =>{
 console.log(req.url,req.method)
//  lodash fcts
 let num = lo.random(0,20)
console.log(num)
const great = lo.once(()=>{
    console.log('hello!')
})

great()
great()

 //set header response content type
 res.setHeader('Content-Type','text/html')
 // WHITOUT FILE HTML
//  res.write('<head><link rel="StyleSheet" href="#"></head>')  
//  res.write('<p>hello words!</p>')
//  res.write('<p>hello again words!</p>')
//  res.end()
let path = './views/';

switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode= 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode= 200;
        break;
    case '/about-me':
        res.statusCode= 301;//redirct
        res.setHeader('Location','/about');
        res.end();
        break;
    default:
        path += '404.html';
        res.statusCode= 404;
        break;
}
fs.readFile(path,(err,data) =>{
    if(err){
        console.log('there is an erreur')
        res.end();
    }
    // res.write(data)
    res.end(data)
})

})
// (req, res) => { ... } : Il s'agit d'une fonction de rappel (callback) qui sera exécutée chaque fois qu'une requête HTTP est reçue par le serveur.

serveur.listen(3000 ,'localhost' , ()=>{
    console.log('listening for requests on port 3000')
})
// serveur.listen(3000, 'localhost', ...) : Cette méthode fait en sorte que le serveur écoute sur le port 3000 de l'adresse 'localhost'.
// () => { ... } : Il s'agit d'une fonction de rappel qui sera exécutée une fois que le serveur a commencé à écouter.




// 1.NPM (Node Package Manager) est le gestionnaire de paquets par défaut pour Node.js. Il permet aux développeurs de partager et de réutiliser du code, ainsi que de gérer les dépendances de leurs projets Node.js. Voici une explication détaillée de ce qu'est NPM, comment il fonctionne, et comment l'utiliser.

// Qu'est-ce que NPM?
// Gestionnaire de Paquets : NPM est un outil qui facilite l'installation, la mise à jour et la gestion des bibliothèques et des paquets nécessaires pour vos projets Node.js.
// Dépôt en Ligne : NPM est également un registre en ligne où les développeurs peuvent publier leurs paquets afin que d'autres puissent les utiliser.
// Fonctionnalités Principales de NPM
// Installation des Paquets :

// NPM permet d'installer des paquets JavaScript à partir du registre NPM.
// Les paquets peuvent être des bibliothèques, des frameworks, des utilitaires, etc.
// Gestion des Dépendances :

// NPM gère les dépendances de votre projet via un fichier package.json où sont listés tous les paquets nécessaires à votre application.
// Scripts NPM :

// Vous pouvez définir des scripts dans le fichier package.json pour automatiser les tâches courantes comme les tests, le démarrage du serveur, le build, etc.
// Publication de Paquets :

// Les développeurs peuvent publier leurs propres paquets sur le registre NPM pour les partager avec la communauté.


// 2.install package globally(nodemon: restart serveur every changment)

// 3.package.json file:La commande npm init est utilisée pour initialiser un nouveau projet Node.js et créer un fichier package.json dans le répertoire de votre projet. Le fichier package.json est essentiel pour gérer les dépendances et les scripts du projet, et il contient des informations clés sur le projet.

// 4.install package locally(lodash: have lot of functions): dans le projet Les paquets sont installés dans le répertoire node_modules de votre projet courant. Les dépendances sont enregistrées dans le fichier package.json du projet sous dependencies.

// installation Locale	Installation Globale
// npm install <package-name>	npm install -g <package-name>
// Installé dans le répertoire node_modules du projet	Installé dans un répertoire global (ex: /usr/local/lib/node_modules)
// Accessible uniquement dans le projet	Accessible depuis n'importe quel projet
// Utilisé pour les dépendances de projet	Utilisé pour les outils en ligne de commande
// Ne nécessite pas de permissions administratives	Peut nécessiter des permissions administratives (sudo)


// 5. dependiencs : npm install