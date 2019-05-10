const http = require('http')
const dateformat= require('dateformat')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/json'})
    if(req.url === '/date')
        res.write(dateformat(new Date(),'dd-mmm-yyyy'))
    else if(req.url === '/time')
        res.write(dateformat(new Date(),'hh:MM:ss TT'))
    else
        res.write(dateformat(new Date(),'dd-mmm-yyyy hh:MM:ss TT'))
    res.end()
})

server.listen(3000,()=>{
    console.log("Server is Running on port 3000")
})