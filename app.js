const http = require('http')
const server = http.createServer((req,res)=>{
    res.writeHead({'Content-Type':'text/json'})
    res.write(new Date().toDateString())
    res.end()
})

server.listen(3000,()=>{
    console.log("Server is Running on port 3000")
})