//console.log("Hello World");
// const { error } = require('console');
const fs=require('fs');
// const fileinfo=fs.readFileSync('index.txt','utf-8');
// console.log(fileinfo);

//Non blocking code (Asynchronous code)

fs.readFile('start.txt','utf-8',(err,data) => {
    console.log(data);
fs.readFile('welcome.txt','utf-8',(err,data2)=>{
    if(err)
    {
    console.log(err);
    return
    }
fs.readFile(`${data2.trim()}.txt`,'utf-8',(err,data3)=>{
    if(err)
    {
    console.log(err);
    return
    }
    console.log(data3);

fs.writeFile('index2.txt',`${data}\n${data2}`,err=>{
    console.log("file written");
});


});
});
});


console.log("Waiting to read start.txt file");

