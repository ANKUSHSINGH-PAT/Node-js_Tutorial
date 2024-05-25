const fs=require('fs');
const http = require('http');
const url = require('url');
const slugify=require('slugify')

const data=fs.readFileSync('data.json','utf-8');
const templates=fs.readFileSync('C:/Users/00452Y744/Desktop/js/node-js/Templates/overview.html','utf-8');
const product=fs.readFileSync('C:/Users/00452Y744/Desktop/js/node-js/Templates/template_product.html','utf-8');
const data_obj=JSON.parse(data);
const slugs=data_obj.map(el=>slugify(el.productName,{lower:true}));
console.log(slugs);
//console.log(slugify('Fresh Avacados',{ lower:true }))
const server = http.createServer((req, res) => {
    //console.log(req.url);
    const path_name = req.url;
    if (path_name === '/nextpg') {
        console.log("Welcome to Page");
        res.end("Welcome Page");
    }
    else if(path_name === '/'){
        console.log('Welcome to Home Page')
       // res.end("Welcome to Home Page");
        res.end(templates);
       
    }
    else if(path_name ==='/api'){
      
            res.writeHead(200,{'Content-type':'application/json'});
            res.end(data);
            
       }
       
    else {
        res.writeHead(404,{
            'Content-type':'text/html'});
        res.end('<h4>Page not found!!!</h4>');
    }
    
});

server.listen(8000, '127.0.0.1', () => {
    console.log("listening to server on port 8000");
});
