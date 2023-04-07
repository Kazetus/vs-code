
const http = require("http");
const fs = require('fs');
const server = http.createServer((Request, Response)=>{
    let fichier = '';
    Response.setHeader('content-type', 'text/html; charset=utf-8');
    console.log("Server create succesfully.");
    if ((Request.url === "/" || Request.url === "/home") && (Request.method === "GET")) {
        fichier = './html/indexe.html';
    }
    else if ((Request.url === "/profil") && (Request.method === "GET")){
        fichier = './html/profil.html';
    }
    else if((Request.url === "/contact") && (Request.method === "GET")){
        fichier = './html/contact.html';
    }
    else{
        fichier = '.html/404.html';
    }
    fs.readFile(fichier, (error, data) => {
        if(error) {
            Response.end('file have error');
        } else {
            Response.end(data);
        }
    });
});

server.listen(8080, "localhost", ()=>{
    console.log("Server listening on port 8080");
});