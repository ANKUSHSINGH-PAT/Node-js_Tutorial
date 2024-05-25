const fs=require('fs');
const os=require('os');
console.log(os.totalmem()/1024/1026/1024);

setTimeout(()=>console.log('timer 1 finished'),1000);
setImmediate(()=>console.log('immediate 1 finished'));
fs.readFile('C:/Users/00452Y744/Desktop/js/node-js/index.txt','utf-8',(err,data)=>{
         console.log(data);

         //Call back Queue
         setTimeout(()=>console.log("timer2 finished"),1000);
         setImmediate(()=>console.log('immediate 2 finished'));


         process.nextTick(()=>console.log('Next Click event'))       /// Micro task Queue >>> Call back queue (Priority)


         
})

console.log("hello from main code");
// const http=require('http');

// const server=http.createServer((req,res)=>{
//     res.end("Hello Node");

// }).setTimeout(3000);
// server.listen('3000');
