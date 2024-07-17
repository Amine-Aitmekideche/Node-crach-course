const http = require('http')
const fs = require('fs')

const serveur = http.createServer((req, res) =>{
 console.log(req.url,req.method)

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
