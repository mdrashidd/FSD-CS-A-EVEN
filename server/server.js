import { error } from 'console';
import http from 'http';
import os from "os";

let PORT=4001;
let body=[];
const sever=http.createServer((req,res)=>{
const url=req.url;
if(url=="/" && req.method=="GET"){
    res.end("Home Page");
}else if(url=="/about" && req.method=="GET"){
res.write("<h1>About Page<h1>");
}else if(url=="/contact" && req.method=="GET"){
    res.end("<h1>Contact Page<h1>");
}else if(url=="/system" && req.method=="GET"){
    res.end("<h1>Server Info<h1>");
}else if(url=="/senddata" && req.method=="POST"){

    
    req.on("data",(chunk)=>{
        body.push(chunk);
    })
    
    req.on("end",()=>{
        req.statusCode=201;
    console.log(body, "Data send");
         res.end(body+ " <h1>Status Code: 201 <h1>");
    })
    
   
}else if(url=="/viewdata" && req.method=="GET"){
    res.write("View Page");
    res.end(body);

}
else{
    req.statusCode=404;
    res.end("<h1>Error Page<h1>");
}

})

sever.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});