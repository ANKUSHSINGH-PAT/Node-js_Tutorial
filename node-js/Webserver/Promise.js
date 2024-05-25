const fs=require('fs');
const superagent =require('superagent');
// fs.readFile("C:/Users/00452Y744/Desktop/js/node-js/Webserver/Dog_Breed",'utf-8',(err,data)=>{
//     console.log(data);
//     superagent.get(`https://api.nationalize.io/?name=${data}`,(err,data)=>{
//         if(err) return console.log("Image not found");
//         const nationalityData = JSON.parse(data.text);
//         const first=nationalityData.country;
//         console.log(first[0])


//     })
// })

fs.readFile("C:/Users/00452Y744/Desktop/js/node-js/Webserver/Dog_Breed",'utf-8',(err,data)=>{
    superagent.get(`https://api.nationalize.io/?name=${data}`).then(res=>{
        if(err) return console.log(err.message);
        const data=JSON.parse(res.text);
        console.log(data);
    }).catch(err=>{
        console.log(err.message);
    })
    

    })


