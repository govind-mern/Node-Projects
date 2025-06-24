const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/getData'){
        res.end('server running')
    }
    else
    res.end('hello world')

})
server.listen(3000)