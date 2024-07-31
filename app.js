const express = require('express');
const morgan = require('morgan');

// intaliser l'app: L'objet app créé par express() dispose de plusieurs méthodes qui permettent de définir des routes, des middlewares, et de configurer divers aspects de l'application
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views','./views')

// lisning for requite
app.listen(3000,"localhost",()=>{
    console.log('lisning in port 3000 localhost')
})

// Middleware and static files (img , css)
app.use(express.static('public'))

// app.use((req,res,next) => {
//     console.log("New request made:")
//     console.log("host:",req.hostname)
//     console.log("path:",req.path)
//     console.log("methode:",req.method)
//     next()
// })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use((req,res,next) => {
    console.log("in the next middlware")
    next();
})


app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ]; 
    res.render('index', {title: 'Home', blogs})
})

app.get('/about',(req,res)=>{
    // res.send("<p> Hello Word about page!</p>")
    res.render('about',{title: 'About'})
})

app.get('/blogs/create',(req,res)=>{
    // res.send("<p> Hello Word about page!</p>")
    res.render('create', {title: 'Create new blog'})
})

// redirect

app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

// 404


app.use((req,res)=>{
    res.status(404).render('404',{title: '404'})
})


//  Middleware en Express.js sont une composante essentielle dans les frameworks web comme Express.js. Ils représentent des fonctions qui ont accès à l'objet de requête (req), à l'objet de réponse (res), et à la fonction next dans le cycle de traitement des requêtes
// Morgan est un middleware de journalisation HTTP pour les applications Node.js. Il est souvent utilisé avec Express.js pour enregistrer les détails des requêtes HTTP reçues par le serveur, comme la méthode de la requête (GET, POST, etc.), l'URL, le statut de la réponse, le temps de réponse, et plus encore. Morgan est particulièrement utile pour le débogage et la surveillance de l'application, car il permet de suivre et d'analyser le trafic HTTP
// Morgan supporte plusieurs formats de sortie prédéfinis :

// combined : Un format de log complet combinant les informations de la méthode, de l'URL, du statut, etc. C'est un format standard pour les journaux de serveurs.
// common : Un format de log commun sans les détails de référence et d'agent utilisateur.
// dev : Un format de log concis avec des couleurs, utile pour le développement.
// short : Un format court de log.
// tiny : Un format minimal de log.