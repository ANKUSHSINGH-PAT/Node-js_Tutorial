// const fs=require('fs');
// const superagent=require('superagent');

// const readFileInfo=file=>{
//     return new Promise((resolve, reject) => {
//         fs.readFile(file,(err,data)=>{
//             if(err) reject("I could not find the file");
//             resolve(data);
//         })
//     })
// }
// readFileInfo(`C:/Users/00452Y744/Desktop/js/node-js/Webserver/Dog_Breed`).then(data=>{
//     console.log(`${data}`);
// })

// let promise=new Promise(function(resolve,reject){
//     resolve("Promise Accepted")
//     reject("Promise rejected")
// })

// promise.then(function(sucess){
//     console.log(sucess);
// }).catch(function (error){
//     console.log(error);
// })

let promise=new Promise((resolve,reject)=>{
    let i=2*2;
    if(i==4)
    resolve("Prin="+i)
    else
    reject("Invaid output")
})

promise.then((message)=>{
    console.log(message);
}).catch(err=>{console.log(err.message)});