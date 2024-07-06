const fs = require('fs');

// reading file(async fcts)

// fs.readFile("./docs/blog1.txt" , (err, data)=> {
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
//     console.log(data.toString())
// }
// )


// console.log("async fcts")

//  writing file

fs.writeFile("./docs/blog1.txt","hello word !!!!",()=>{
    console.log("file writen")
});

fs.writeFile("./docs/blog2.txt","hello again !!!!",()=>{
    console.log("file writen")
});


// creating deleting folder derctories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if (err){
            console.log(err)
        }
        console.log('folder created')
    })
}else{
    fs.rmdir('./assets',()=>{
        console.log('folder deleted')
    })
}


// deleting file

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err) =>{
        if(err){
            console.log(err)
        }
        console.log("file deleting");
    })
}


