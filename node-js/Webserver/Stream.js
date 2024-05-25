const server=require('http').createServer();
const fs=require('fs');
// server1.on('requet',(req,res)=>{
//     console.log("Request received");
//     res.end("Request received");
// }
// )
server.on('request',(req,res)=>{
    // fs.readFile('C:/Users/00452Y744/Desktop/js/node-js/index.txt','utf-8',(err,data)=>{
    //     if(err) console.log(err);
    //     res.end(data)
    // })
    const readable=fs.createReadStream('C:/Users/00452Y744/Desktop/js/node-js/index.txt');
    readable.on('data',chunk=>{
        res.write(chunk);
        console.log(chunk);
    });
    readable.on("end",()=>{
        res.end();
    });
});


server.listen(8000,()=>{
    console.log("Listening......");
});


