// global object

// En JavaScript, l'objet global donne accès à l'espace de noms global. Il permet d'accéder aux variables et fonctions globales depuis n'importe où dans votre code. Le nom de l'objet global dépend du contexte d'exécution :

// Dans un navigateur web, l'objet global est window.
// Dans Node.js, l'objet global est global.
// Dans les Web Workers, l'objet global est self.

console.log(global);

// setTimeout(() => {
//     console.log('on setTimeout');
//     clearInterval(int);
// }, 3000);

// const int = setInterval(()=>{
//     console.log("on the intrval fct");
// }, 1000)

// console.log(__dirname);
// console.log(__filename);

// il n existe pas DOM dans node js cote serveur 
console.log(document.querySelector);

