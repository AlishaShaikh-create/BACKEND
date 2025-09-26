import express from 'express'
import './dbConnect.js'

let port = 5000;
const app=express()

app.get('/',(req,res)=>{
    res.send("<h1> HELLO </h1>");
})

app.listen(port,()=>{
    console.log(`server is running at the port ${port}`);
})

