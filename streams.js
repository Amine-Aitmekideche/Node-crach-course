const fs = require('fs');
// Un stream est une séquence de données qui peut être lue ou écrite de manière séquentielle. En Node.js, les streams permettent de traiter des données morceau par morceau (ou "chunk"), plutôt que de charger l'ensemble des données en mémoire en une seule fois

//  +++++++++++Start using data before it has finish loading++++++++++++++

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// console.log(readStream)

// readStream.on('data',(chunk)=>{
    
//     console.log("------NEW CHUNK ------ \n")
//     console.log(chunk)
//     writeStream.write('\n\n------NEW CHUNK ------\n\n');
//     writeStream.write(chunk)
   
// })

readStream.pipe(writeStream);


// Écouter l'événement 'finish' pour savoir quand l'écriture est terminée
writeStream.on('finish', () => {
    console.log('Le fichier a été copié avec succès.');
});