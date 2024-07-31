const express = require('express');

// intaliser l'app: L'objet app créé par express() dispose de plusieurs méthodes qui permettent de définir des routes, des middlewares, et de configurer divers aspects de l'application
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views','./views')

// lisning for requite
app.listen(3000,"localhost",()=>{
    console.log('lisning in port 3000 localhost')
})

const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ]; 

app.get('/',(req,res)=>{
    // res.send("<p> Hello Word!</p>")

    //path must be absolute
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


// Les view engines (moteurs de vue) en Express.js sont des outils qui permettent de générer des pages HTML dynamiques à partir de modèles. Un moteur de vue prend des données et un modèle, puis génère une page HTML finale. Cela est particulièrement utile pour créer des applications web où le contenu de la page peut changer dynamiquement en fonction des données de l'utilisateur ou du contexte.
// res.render(view [, locals] [, callback]) est une méthode utilisée pour rendre des vues en utilisant le moteur de vue configuré dans Express. Elle prend un fichier modèle, le remplit avec les données fournies, et génère le HTML final qui est ensuite envoyé au client.