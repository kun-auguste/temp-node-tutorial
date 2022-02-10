const http = require('http')
const server = http.createServer()

server.on('request', (req,res) =>{
    res.end('Welcome')
})

const port = 3000

server.listen(port);
console.log(`server created on port: ${port} `);
