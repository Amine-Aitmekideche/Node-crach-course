// const names = require("./people")

// console.log(names.people,names.ages);  [ 'Amine', 'karim', 'yahya', 'yanis' ] [ 21, 34, 54, 11 ]


const {people, ages} = require("./people")  // destrection
console.log(people,ages);

const os = require('os');
console.log(os.platform(),os.hostname(),os.homedir())