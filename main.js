const express = require('express')

const app = express()
app.get('/',(req,res,next) =>{
    res.end('Hello')
})
app.listen(process.env.port || 3000,()=>{
    console.log(process.env.port)
})
    