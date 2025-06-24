// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url==='/test'){
//         res.end('server running')
//     }
//     else
//     res.end('hello world')

// })
// server.listen(3000)
const express = require('express')
const app = express()

app.use('/',(req,res)=>{
    res.send('Hello world')
})

app.listen(7777)