import express from 'express'
const app=express();
app.use(express.json())
const PORT = 3000;

app.get('/register',(req,res)=>{
    let {user,password}=req.query;
    console.log(user,password);
  res.send("Hello world , your first server code");
})



app.post('/register',(req,res)=>{
    res.send("POST");
  console.log(req.body);
  
})

app.listen(PORT,()=>{
    console.log(`listenng to port ${PORT} `)
})