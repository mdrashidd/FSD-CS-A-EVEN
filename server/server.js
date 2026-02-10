import http from 'http';
const sever=http.createServer((req,res)=>{
const url=req.url;
if(url=="/"){
    res.write("Home Page");
}else if(url=="/about"){
res.write("About Page");
}else if(url=="/contact"){
    res.write("Contact Page");
}else{
    res.write("Error Page");
}
res.end();
})

sever.listen(4001);