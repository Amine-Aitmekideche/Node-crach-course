const people = ["Amine","karim","yahya","yanis"];
const ages = [21,34,54,11];


// console.log(people);

// module.exports = {p : people};    { p: [ 'Amine', 'karim', 'yahya', 'yanis' ] }
module.exports ={
    people ,ages
};




// Exemple Comparatif
// Supposons que vous ayez un module math.js avec des exports nommés :

// javascript
// Copy code
// // math.js
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// Avec import :

// javascript
// Copy code
// // main.js
// import { add, subtract } from './math.js';

// console.log(add(2, 3)); // 5
// console.log(subtract(5, 3)); // 2
// Avec require (en supposant une structure CommonJS) :

// javascript
// Copy code
// // math.js
// exports.add = (a, b) => a + b;
// exports.subtract = (a, b) => a - b;
// javascript
// Copy code
// // main.js
// const { add, subtract } = require('./math');

// console.log(add(2, 3)); // 5
// console.log(subtract(5, 3)); // 2
// Conclusion
// Utilisez require si vous travaillez dans un environnement Node.js traditionnel ou si vous avez besoin d'importations dynamiques.
// Utilisez import si vous travaillez avec des modules ES6, que ce soit côté client ou côté serveur, pour bénéficier des avantages des importations statiques et des optimisations associées.
// En général, import est recommandé pour les nouvelles applications en raison de sa syntaxe plus moderne et de ses capacités d'optimisation.





